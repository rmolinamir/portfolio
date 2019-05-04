import React from 'react'
// Assets
import profilePicture from '../../assets/images/Profile-Picture.jpg'
import parallaxImage from '../../assets/images/Parallax-Background.jpg'
import personalLogo from '../../assets/svg/personal-logo.svg'
// CSS
import classes from './AboutMe.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../hoc/Layout/ThemeContext/ThemeContext'
import Parallax from '../../hoc/Parallax/Parallax'
import SocialMediaButton from '../../components/UI/SocialMediaButton/SocialMediaButton'
import DownloadButton from '../../components/UI/DownloadButton/DownloadButton'
import Code from './Code/Code'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import Footer from '../../components/UI/Footer/Footer'
import ImageFadeIn from '../../components/UI/ImageFadeIn/ImageFadeIn'

const aboutMe = () => {
  const socialMediaButtons = [
    { icon: 'github', href: 'https://github.com/rmolinamir', targetBlank: true },
    { icon: 'gmail', href: 'mailto:rmolinamir@gmail.com', targetBlank: false },
    { icon: 'linkedin-one', href: 'https://www.linkedin.com/in/rmolinamir/', targetBlank: true }
  ].map(Button => {
    return <SocialMediaButton key={Button.href} icon={Button.icon} href={Button.href} targetBlank={Button.targetBlank} />
  })
  const pageContent = (
    <>
      <div className={classes.Container}>
        <IntroHeader intro='Greetings! Thanks for visiting my site. Below is a small introduction about me, where I talk about my education, skills, and what stack I commonly use. For more detailed information you may check out the other tabs.'>About Me</IntroHeader>
        <div className={classes.Profile}>
          <div className={classes.Portrait}>
            <div className={classes.Content}>
              <div className={classes.ProfilePicture}>
                <ImageFadeIn
                  noWrapper
                  className={classes.Portrait}
                  draggable='false' src={profilePicture} />
              </div>
              <div className={classes.Name}>Robert Molina</div>
              <div className={classes.Title}>Fullstack Developer</div>
              <img className={classes.Logo} src={personalLogo} alt='Personal Logo' />
              <DownloadButton href='https://drive.google.com/open?id=15bEpE77LztNaNu2fn2wRtPsXeKzHSCu9'>Full Resume</DownloadButton>
            </div>
          </div>
          <Code />
        </div>
      </div>
      <Footer />
    </>
  )
  return (
    <div className={classes.Wrapper}>
      <Parallax
        image={parallaxImage}
        socialMediaButtons={socialMediaButtons}
      >
        {pageContent}
      </Parallax>
    </div>
  )
}

export default withContext(aboutMe, ThemeContext)

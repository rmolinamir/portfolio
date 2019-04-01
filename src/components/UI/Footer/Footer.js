import React from 'react'
// Image
import background from '../../../assets/images/footer-background.jpg'
// CSS
import classes from './Footer.module.css'
// JSX
import { NavLink, withRouter } from 'react-router-dom'
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton'
import ImageFadeIn from '../ImageFadeIn/ImageFadeIn'

const footer = () => {
  const socialMediaButtons = [
    { icon: 'github', href: 'https://github.com/rmolinamir', targetBlank: true },
    { icon: 'gmail', href: 'mailto:rmolinamir@gmail.com', targetBlank: false },
    { icon: 'linkedin-one', href: 'https://www.linkedin.com/in/robert-molina-467798153/', targetBlank: true }
  ].map(Button => {
    return <SocialMediaButton key={Button.href} icon={Button.icon} href={Button.href} targetBlank={Button.targetBlank} />
  })
  return (
    <div className={classes.Footer}>
      <div className={classes.BannerWrapper}>
        <div className={classes.BannerBackground} >
          <ImageFadeIn src={background} />
        </div>
        <div className={classes.BannerContainer}>
          <div className={classes.Banner}>
            <h1 className={classes.Interested}>Coding, Learning, Improving</h1>
            <div className={classes.Contact}>
              <span>You can get in touch with me through any of the links below.</span>
            </div>
            <div className={classes.SocialLinks}>
              <div>
                {socialMediaButtons}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.NavLinks}>
        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/projects'><span className={classes.Link}>Projects</span></NavLink>
        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/codelab'><span className={classes.Link}>Code Lab</span></NavLink>
        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/skills'><span className={classes.Link}>Skills</span></NavLink>
        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/psd-designs'><span className={classes.Link}>Designs</span></NavLink>
        <NavLink exact activeClassName={classes.active} className={classes.NavLink} to='/'><span className={classes.Link}>About Me</span></NavLink>
        <a href='https://github.com/rmolinamir' target='_blank' rel='noopener noreferrer' className={classes.NavLink}><span className={classes.Link}>Github</span></a>
      </div>
      <div className={classes.CopyrightWrapper}>
        <span>
          <ins className={classes.Legalmark}>©</ins>
          <span>2019 Robert Molina</span>
        </span>
      </div>
    </div>
  )
}

export default withRouter(footer)

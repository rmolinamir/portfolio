import React from 'react'
import { packagesData } from '../packageData'
// CSS
import classes from './Default.module.css'
// JSX
import HoverCard from 'react-png-hovercard'
import IntroHeader from '../../../components/UI/IntroHeader/IntroHeader'

const codeLabDefault = () => {
  const codeLabPackages = Object.keys(packagesData).map(packageKey => {
    const codeLabPackage = packagesData[packageKey]
    return (
      <HoverCard
        key={packageKey}
        front={
          <div className={classes.Front}>
            {packageKey}
          </div>
        }
        back={
          <div className={classes.Back}>
            {codeLabPackage.description}
          </div>
        }
        maxWidth={280}
        animationSpeed={500}
        height={280}
        margin='24px 12px' />
    )
  })

  return (
    <div className={classes.Wrapper}>
      <IntroHeader
        className={classes.Header}
        intro="These are all of the open source NPM packages I've developed so far. To check them out in more detail, you may hover over the cards to visit their respective documentation or their Github repositories.">
        NPM Packages
      </IntroHeader>
      <div className={classes.Container}>
        {codeLabPackages}
      </div>
    </div>
  )
}

export default codeLabDefault

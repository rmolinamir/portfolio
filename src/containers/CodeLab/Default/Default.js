import React from 'react'
import { packagesData } from '../packageData'
// CSS
import classes from './Default.module.css'
// JSX
import HoverCard from 'react-png-hovercard'
import IntroHeader from '../../../components/UI/IntroHeader/IntroHeader'
import { Front, Back } from '../../../components/CodeLab/PackageCard'

const codeLabDefault = () => {
  const codeLabPackages = Object.keys(packagesData).map(packageKey => {
    const codeLabPackage = packagesData[packageKey]
    return (
      <HoverCard
        key={packageKey}
        className={classes.Card}
        front={
          <Front>{packageKey}</Front>
        }
        back={
          <Back
            github={codeLabPackage.github}
            documentation={codeLabPackage.documentation}>
            {codeLabPackage.description}
          </Back>
        }
        animationSpeed={500}
        maxWidth={280}
        height={280} />
    )
  })

  return (
    <div className={classes.Wrapper}>
      <IntroHeader
        className={classes.Header}
        intro="These are all of the open source NPM packages I've developed so far. To check them out in more detail, you may hover over or touch on the cards to visit their respective documentation or their Github repositories.">
        NPM Packages
      </IntroHeader>
      <div className={classes.Container}>
        {codeLabPackages}
      </div>
    </div>
  )
}

export default codeLabDefault

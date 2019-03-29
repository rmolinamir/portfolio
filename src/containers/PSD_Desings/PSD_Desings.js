import React from 'react'
// data
import { designsData } from './PSD_Desings_Data/Desings_Data'
// CSS
import classes from './PSD_Desings.module.css'
// JSX
import Design from '../../components/PSD_Designs/Design/Design'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import Container from '../../components/UI/Container/Container'
import Separator from '../../components/UI/Separator/Separator'

const designs = () => {
  return (
    <div
      className={classes.Wrapper}>
      <IntroHeader intro="Over time I've had to use Adobe Photoshop and similar softwares to improve images or do certain design arts such as flyers and promotional photos for apps. Here is a small collection of what I've done in the past.">My Designs</IntroHeader>
      <Container>
        <Separator />
        {Object.values(designsData).map((design, index) => {
          return (
            <Design
              key={index}
              order={index % 2 ? '-1' : null}
              title={design.title}
              company={design.company}
              website={design.website}
              images={design.images}
              logo={design.logo}
              description={design.description} />
          )
        })}
      </Container>
    </div>
  )
}

export default designs

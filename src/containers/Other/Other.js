import React from 'react'
// data
import { designsData } from './Data'
// CSS
import classes from './Other.module.css'
// JSX
import Other from '../../components/Other/Other/Other'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import Container from '../../components/UI/Container/Container'
import Separator from '../../components/UI/Separator/Separator'

const designs = () => {
  return (
    <div
      className={classes.Wrapper}>
      <IntroHeader
        intro="Over time I had opportunities to be part of different small projects that aren't related to programming, but interesting nonetheless. These projects include using Adobe Photoshop and similar Software to improve images or do certain design arts such as flyers and promotional photos for apps, etc. Here is a small collection of what I've done in the past.">
        Other
      </IntroHeader>
      <Container>
        <Separator />
        {Object.values(designsData).map((design, index) => {
          return (
            <Other
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

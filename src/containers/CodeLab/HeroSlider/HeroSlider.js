import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './HeroSlider.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../hoc/Layout/ThemeContext/ThemeContext'
import BasicSlider from './Sliders/BasicSlider/BasicSlider'
import VerticalSlider from './Sliders/VerticalSlider/VerticalSlider'
import BlendModeSlider from './Sliders/BlendModeSlider/BlendModeSlider'
import ZoomSlider from './Sliders/ZoomSlider/ZoomSlider'
import SlidesChildrenSlider from './Sliders/SlidesChildrenSlider/SlidesChildrenSlider'
import NavbarSlider from './Sliders/NavbarSlider/NavbarSlider'
import ButtonsSlider from './Sliders/ButtonsSlider/ButtonsSlider'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Example from '../../../components/CodeLab/Example/Example'

const heroSlider = (props) => {
  const theme = props._context && props._context.theme

  return (
    <div className={classes.App}>
      <div>
        <h1 className={classes.Title}>hero-slider</h1>
        <br />
        <h2 className={classes.Header}>Showcase</h2>
        <ul className={classes.List}>
          <li className={classes.Item}><a className={classes.Anchor} href='#basic'>Basic Slider</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#vertical'>Vertical Slider</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#zoom'>Zoom Slider</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#respective'>Respective content to each Slide component</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#blend'>Blend Mode Slider</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#navbar'>Navbar Slider</a></li>
          <li className={classes.Item}><a className={classes.Anchor} href='#buttons'>Custom Buttons Slider</a></li>
        </ul>
      </div>
      <div className={classes.Examples}>
        <div style={{
          display: 'flex',
          flexFlow: 'column',
          width: '100%',
          margin: '0 auto 64px',
          justifyContent: 'center'
        }}>
          <Example title='Basic Slider' id='basic'>
            <BasicSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  slidingAnimation='left_to_right'
  orientation='horizontal'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: 'rgba(0, 0, 0, 0.33)'
  }}
  settings={{
    slidingDuration: 250,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 5000,
    height: '80vh',
    color: '#FFF
  }}>
  <Wrapper>
    <Title>
      Basic Slider
    </Title>
    <Subtitle>
      Slides' background attachment set to fixed
    </Subtitle>
  </Wrapper>

  <Slide
    background={{
      backgroundImage: giauPass,
      backgroundAttachment: 'fixed'
    }} />

  <Slide
    background={{
      backgroundImage: bogliasco,
      backgroundAttachment: 'fixed'
    }} />

  <Slide
    background={{
      backgroundImage: countyClare,
      backgroundAttachment: 'fixed'
    }} />

  <Slide
    background={{
      backgroundImage: craterRock,
      backgroundAttachment: 'fixed'
    }} />

  <Nav />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Vertical Slider' id='vertical'>
            <VerticalSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  slidingAnimation='top_to_bottom'
  orientation='vertical'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 400,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 8000,
    height: '80vh',
    color: '#FFF'
  }}>
  <Wrapper>
    <Title>
      Vertical Slider
    </Title>
    <Subtitle>
      Try switching to a display that supports touch, then swipe vertically
    </Subtitle>
  </Wrapper>

  <Slide
    shouldRenderMask
    background={{
      backgroundAttachment: 'fixed',
      backgroundColor: '#6D9B98',
      backgroundImage: salta
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundAttachment: 'fixed',
      backgroundColor: '#8A8A8A',
      backgroundImage: scharbeutz
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundAttachment: 'fixed',
      backgroundColor: '#EA2329',
      backgroundImage: selvaDiValGardena
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundAttachment: 'fixed',
      backgroundColor: '#2D7791',
      backgroundImage: seoraksanMountains
    }} />

  <Nav
    position={{
      bottom: '15%',
      left: '50%',
      transform: 'translateX(-50%)'
    }}
  />
  <SideNav />
  <SideNav
    isPositionedRight={false}
    position={{
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)'
    }}
  />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Blend Mode Slider' id='blend'>
            <BlendModeSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  slidingAnimation='fade'
  orientation='horizontal'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 400,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 8000,
    height: '80vh',
    color: '#FFF'
  }}>
  <Wrapper>
    <Title>
      Blend Mode Slider
    </Title>
    <Subtitle>
      Slides' and masks' background blend mode set to luminosity
    </Subtitle>
    <Subtitle>
      Slides' shouldRenderMask prop set to true
    </Subtitle>
  </Wrapper>

  <Slide
    shouldRenderMask
    navDescription='Rocky Waterfall'
    background={{
      backgroundColor: '#2D7791',
      backgroundBlendMode: 'luminosity',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: rockyWaterfall
    }} />

  <Slide
    shouldRenderMask
    navDescription='Palau - Pacific Ocean'
    background={{
      backgroundColor: '#8A8A8A',
      backgroundBlendMode: 'luminosity',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: palauPacificOcean
    }} />

  <Slide
    shouldRenderMask
    navDescription='Quepos - Costa Rica'
    background={{
      backgroundColor: '#EA2329',
      backgroundBlendMode: 'luminosity',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: queposCostaRica
    }} />

  <Slide
    shouldRenderMask
    navDescription='Mountain View'
    background={{
      backgroundColor: '#6D9B98',
      backgroundBlendMode: 'luminosity',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: mountainView
    }} />

  <ButtonsNav />
  <SideNav
    position={{
      top: '0',
      right: '0'
    }}
  />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Zoom Slider' id='zoom'>
            <ZoomSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  orientation='horizontal'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 500,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 5000,
    height: '80vh',
    color: '#FFF'
  }}>
  <Wrapper>
    <Title>
      Zoom Slider
    </Title>
    <Subtitle>
      Slides' backgroundAnimation prop set to 'zoom' (you may reload the page if it's already over)
    </Subtitle>
  </Wrapper>

  <Slide
    navDescription='Hallstatt - Austria'
    background={{
      backgroundImage: hallstatt,
      backgroundAnimation: 'zoom'
    }} />

  <Slide
    navDescription='Hvitserkur - Iceland'
    background={{
      backgroundImage: hvitserkur,
      backgroundAnimation: 'zoom'
    }} />

  <Slide
    navDescription='Jacksonville - USA'
    background={{
      backgroundImage: jacksonville,
      backgroundAnimation: 'zoom'
    }} />

  <Slide
    navDescription='Moraine Lake - Canada'
    background={{
      backgroundImage: moraineLake,
      backgroundAnimation: 'zoom'
    }} />

  <ButtonsNav
    isNullAfterThreshold
    position={{
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)'
    }} />
  <Nav />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Respective content to each Slide component' id='respective'>
            <SlidesChildrenSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  slidingAnimation='top_to_bottom'
  orientation='horizontal'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 600,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 8000,
    height: '80vh',
    color: '#FFF'
  }}>

  <Slide
    background={{
      backgroundImage: salta
    }}>
    <Wrapper>
      <Title>
        Salta - Argentina
      </Title>
    </Wrapper>
  </Slide>

  <Slide
    background={{
      backgroundImage: scharbeutz
    }}>
    <Wrapper>
      <Title>
        Scharbeutz - Germany
      </Title>
    </Wrapper>
  </Slide>

  <Slide
    background={{
      backgroundImage: selvaDiValGardena
    }}>
    <Wrapper>
      <Title>
        Selva Di Val Gardena - Italy
      </Title>
    </Wrapper>
  </Slide>

  <Slide
    background={{
      backgroundImage: seoraksanMountains
    }}>
    <Wrapper>
      <Title>
      Seoraksan Mountains - South Korea
      </Title>
    </Wrapper>
  </Slide>

  <SideNav position={{
    top: 0,
    right: 0
  }} />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Navbar Slider' id='navbar'>
            <NavbarSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  slidingAnimation='top_to_bottom'
  orientation='vertical'
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 400,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: false,
    autoplayDuration: 8000,
    height: '80vh',
    color: '#FFF'
  }}>
  <Navbar />
  <Wrapper>
    <Title>
      Navbar Slider
    </Title>
    <Subtitle>
      Cool stuff.
    </Subtitle>
  </Wrapper>

  <Slide
    shouldRenderMask
    navDescription='Kyoto - Japan'
    background={{
      backgroundColor: '#6D9B98',
      backgroundImage: kyoto
    }} />

  <Slide
    shouldRenderMask
    navDescription='Tenryu-ji Temple - Kyōto-shi - Japan'
    background={{
      backgroundColor: '#8A8A8A',
      backgroundImage: tenryuJiTemple
    }} />

  <Slide
    shouldRenderMask
    navDescription='Hakone - Japan'
    background={{
      backgroundColor: '#EA2329',
      backgroundImage: hakone
    }} />

  <Slide
    shouldRenderMask
    navDescription='Byodo-In Temple - Kaneohe - United States'
    background={{
      backgroundColor: '#2D7791',
      backgroundImage: byodoInTemple
    }} />

  <MenuNav />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>

          <Example title='Custom Buttons Slider' id='buttons'>
            <ButtonsSlider />
            <SyntaxHighlighter language='jsx' style={theme === 'light' ? prism : atomDark}>{`
<HeroSlider
  nextSlide={nextSlideHandler}
  previousSlide={previousSlideHandler}
  slidingAnimation='left_to_right'
  orientation='horizontal'
  set
  initialSlide={1}
  onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
  onChange={(nextSlide) => console.log('onChange', nextSlide)}
  onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
  style={{
    backgroundColor: '#000'
  }}
  settings={{
    slidingDuration: 500,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: false,
    autoplayDuration: 8000,
    height: '80vh',
    color: '#FFF'
  }}>
  <Wrapper>
    <Title>
      Custom Buttons Slider
    </Title>
    <Subtitle>
      Custom Navigation Buttons set up by passing React mutable ref objects as props
    </Subtitle>
    <div>
      <Button
        style={{
          width: 100,
          margin: '12px 8px'
        }}
        button='danger'
        onClick={() => previousSlideHandler.current()}>Previous</Button>
      <Button
        style={{
          width: 100,
          margin: '12px 8px'
        }}
        button='success'
        onClick={() => nextSlideHandler.current()}>Next</Button>
    </div>
  </Wrapper>

  <Slide
    shouldRenderMask
    background={{
      backgroundColor: '#8A8A8A',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: bogliasco,
      backgroundAnimation: 'fade'
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundColor: '#8A8A8A',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: countyClare,
      backgroundAnimation: 'fade'
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundColor: '#8A8A8A',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: craterRock,
      backgroundAnimation: 'fade'
    }} />

  <Slide
    shouldRenderMask
    background={{
      backgroundColor: '#8A8A8A',
      maskBackgroundBlendMode: 'luminosity',
      backgroundImage: giauPass,
      backgroundAnimation: 'fade'
    }} />

  <Nav />
</HeroSlider>`}
            </SyntaxHighlighter>
          </Example>
        </div>
      </div>
    </div>
  )
}

heroSlider.propTypes = {
  _context: PropTypes.object
}

export default withContext(heroSlider, ThemeContext)

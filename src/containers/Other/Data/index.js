import React from 'react'
// JSX
import Button from 'react-png-button'

// Data
// Logos
import servifyLogo from '../../../assets/designs/servify-72x72.png'
import bonpreuFoodsLogo from '../../../assets/designs/bonpreu-foods-156x156.png'
import bridgeLogo from '../../../assets/designs/bridge-47x47.png'
// React Hooks Presentation
import slide1 from '../../../assets/designs/bridge-for-billions-react-presentation/react-hooks-presentation-1.png'
import slide2 from '../../../assets/designs/bridge-for-billions-react-presentation/react-hooks-presentation-2.png'
import slide3 from '../../../assets/designs/bridge-for-billions-react-presentation/react-hooks-presentation-3.png'
import slide4 from '../../../assets/designs/bridge-for-billions-react-presentation/react-hooks-presentation-4.png'
// Servify Promotional Flyer
import front from '../../../assets/designs/servify-flyer-01/Servify-Flyer-01-Front.png'
import back from '../../../assets/designs/servify-flyer-01/Servify-Flyer-01-Back.png'
import firstSketch from '../../../assets/designs/servify-flyer-01/Servify-Flyer-01-Front-First-Sketch.png'
// Servify App Store
import browseLocally from '../../../assets/designs/appstore-promotional-photos/BROWSE_LOCALLY.png'
import publishServices from '../../../assets/designs/appstore-promotional-photos/PUBLISH_SERVICES.png'
import splashScreen from '../../../assets/designs/appstore-promotional-photos/SPLASH_SCREEN.png'
import manyCategories from '../../../assets/designs/appstore-promotional-photos/MANY_CATEGORIES.png'
import freeListings from '../../../assets/designs/appstore-promotional-photos/FREE_LISTINGS.png'
import localServices from '../../../assets/designs/appstore-promotional-photos/LOCAL_SERVICES.png'
// Servify Play Store
import browseLocallyPS from '../../../assets/designs/playstore-promotional-photos.1/BROWSE_LOCALLY.png'
import publishServicesPS from '../../../assets/designs/playstore-promotional-photos.1/PUBLISH_SERVICES.png'
import categoriesScreenPS from '../../../assets/designs/playstore-promotional-photos.1/CATEGORIES_SCREEN.png'
import manyCategoriesPS from '../../../assets/designs/playstore-promotional-photos.1/MANY_CATEGORIES.png'
import freeListingsPS from '../../../assets/designs/playstore-promotional-photos.1/FREE_LISTINGS.png'
// Bonpreu Foods Promotional Flyer
import frontBF from '../../../assets/designs/bonpreu-foods-flyer-01/Bonpreu-Foods-Flyer-01-Front.png'
import backBF from '../../../assets/designs/bonpreu-foods-flyer-01/Bonpreu-Foods-Flyer-01-Back.png'
// Bonpreu Foods Instagram Promotion
import instagramPromotionBF from '../../../assets/designs/bonpreu-foods-instagram-promotion/bonpreu-foods-instagram.jpg'
// Bonpreu Foods Instagram Images Post-Processing
import instagramImagesPostProcess01BF from '../../../assets/designs/bonpreu-foods-instagram-images-post-processing/bonpreu-foods-instagram-post-processing-01.jpg'
import instagramImagesPostProcess02BF from '../../../assets/designs/bonpreu-foods-instagram-images-post-processing/bonpreu-foods-instagram-post-processing-02.jpg'
import instagramImagesPostProcess03BF from '../../../assets/designs/bonpreu-foods-instagram-images-post-processing/bonpreu-foods-instagram-post-processing-03.jpg'
import instagramImagesPostProcess04BF from '../../../assets/designs/bonpreu-foods-instagram-images-post-processing/bonpreu-foods-instagram-post-processing-04.jpg'
import instagramImagesPostProcess05BF from '../../../assets/designs/bonpreu-foods-instagram-images-post-processing/bonpreu-foods-instagram-post-processing-05.jpg'

export const designsData = {
  reactHooksPresentation: {
    title: 'React Hooks Presentation',
    company: 'Bridge For Billions',
    images: [slide4, slide3, slide2, slide1],
    logo: bridgeLogo,
    description: (
      <React.Fragment>
        <div>
          A React Hooks presentation that I made prior to introducing React Hooks into our development environment. The idea
          was to introduce the new React Hooks update to our tech team in the best way possible, so I made this presentation
          with an emphasis over practicality while at the same time being as comprehensive and up to date as possible.
        </div>
        <br />
        <div>
          It also features live, and interactive examples to showcase the potential of the amazing React Hooks.
        </div>
        <a
          href='https://docs.google.com/presentation/d/1IUT-_XLlgmAL7WlMF23d6B0RmxAq4CmV-e4N8Cnem44/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            button='danger'
            blockButton
            style={{
              margin: '18px 0 0'
            }}
          >
            Open in Google Slides
          </Button>
        </a>
      </React.Fragment>
    )
  },
  servifyPromotionalFlyer: {
    title: 'Launch Promotional Flyer',
    company: 'Servify',
    images: [front, back, firstSketch],
    logo: servifyLogo,
    description: `This was our first promotional flyer for Servify. At launch we started to go to different service providers across town telling them about the app, so we made these flyers to spread the word around.
    
    The first sketch (orange style color, 3rd photo), was more focused about the company instead of the app, but down the line we decided to take a different approach and use the flyers to promote the app instead.
    
    The first 2 photos show the final result.`
  },
  servifyAppStore: {
    title: 'App Store Promotional Photos',
    company: 'Servify',
    images: [browseLocally, publishServices, splashScreen, manyCategories, freeListings, localServices],
    logo: servifyLogo,
    description: `Prior to launching the app, we needed promotional photos in order to make it look as good as possible on the iOS Appstore.
        
        Since I've had experience with Photoshop, I decided to tackle on this design after I was provided with the screenshots that featured different parts of the app.
        
        I began by creating the mock iPhone photos featuring parts of the app, then added a bit of colors and titles that pointed out the features, then voilà!`
  },
  servifyGoogleStore: {
    title: 'Gogle Playstore Promotional Photos',
    company: 'Servify',
    images: [categoriesScreenPS, browseLocallyPS, publishServicesPS, manyCategoriesPS, freeListingsPS],
    logo: servifyLogo,
    description: `Just like with the App Store, prior to launching the app, we needed promotional photos for Google's Playstore too, so I modified the App Store photos a bit.
    
    Changed the canvas size, the mock phone was changed to a Nexus model, and used screenshots taken from an Android phone, the rest is history.`
  },
  bonpreuFoodsFlyer: {
    title: 'Promotional Flyer',
    company: 'Bonpreu Foods',
    images: [backBF, frontBF],
    logo: bonpreuFoodsLogo,
    description: `After designing their business web app, I was approached to see if I could also design a promotional flyer for the company.
    
    Using some of their pictures and descriptions taken from the website and their instagram page, I managed to design flyer. 
    
    They're a spanish based company and their target audience is often spanish speakers, for this reason the flyer is in spanish as well, obviously.`
  },
  bonpreuFoodsInstagramPromotion: {
    title: 'Instagram Promotion',
    company: 'Bonpreu Foods',
    images: [instagramPromotionBF],
    logo: bonpreuFoodsLogo,
    description: `After doing some post-processing to some of the images taken by Bonpreu Foods for their instagram, I was asked if I could design an instagram promo-styled image for them to publish.
    
    It's something I had never done before but I think it turned out well.`
  },
  bonpreuFoodsInstagramPostProcess: {
    title: 'Instagram Images Post-Processing',
    company: 'Bonpreu Foods',
    images: [instagramImagesPostProcess01BF, instagramImagesPostProcess02BF, instagramImagesPostProcess03BF, instagramImagesPostProcess04BF, instagramImagesPostProcess05BF],
    logo: bonpreuFoodsLogo,
    description: `During the development of the web app, I had to post process some images to reduce image memory size without sacrificing too much image quality, it's something I always try to do while developing.
    
    Because of this, I was asked If I could do some post-process to the instagram images to increase quality a bit, and to also add the logo into some of their uploaded images as well.`
  }
}

import React from 'react';
// CSS
import classes from './Data.module.css';
// Media & assets
// Servify
import servifyVideo from '../../../assets/projects/servify/servify-video.mp4';
import servifyIcon from '../../../assets/projects/servify/servify-icon.png';
// Tus verdes
import tusVerdesImage from '../../../assets/projects/tus-verdes/tus-verdes.png';
import tusVerdesIcon from '../../../assets/projects/tus-verdes/tus-verdes-icon.png';
// Bonpreu Foods
import bonpreuFoodsVideo from '../../../assets/projects/bonpreu-foods/bonpreu-foods.mp4';
import bonpreuFoodsImage from '../../../assets/projects/bonpreu-foods/bonpreu-foods.png';
// Autoparts Sotomayor
import repuestosSotomayorVideo from '../../../assets/projects/sotomayor-autoparts/sotomayor-autoparts.mp4';
import repuestosSotomayorImage  from '../../../assets/projects/sotomayor-autoparts/sotomayor-autoparts-2.png';
// React Course Project
import myReactBurgerBuilderAppVideo from '../../../assets/projects/burger-builder-app/burger-builder-app.mp4';
// Personal Website
import personalWebsiteVideo  from '../../../assets/projects/personal-website/personal-website.mp4';
// svgS
import githubSVG from '../../../assets/svg/github-icon.svg';
import externalLinkSymbol from '../../../assets/svg/external-link-symbol.svg';
import underConstruction from '../../../assets/svg/under-construction.svg';
import unrealEngine from '../../../assets/svg/unreal-engine-black.svg';
// JSX
import ProjectFront from '../../../components/Projects/Project/Front/Front';
import ProjectBack from '../../../components/Projects/Project/Back/Back';
import SocialMediaButton from '../../../components/UI/SocialMediaButton/SocialMediaButton';
import Video from '../../../components/UI/Video/Video';
import ImageFadeIn from '../../../components/UI/ImageFadeIn/ImageFadeIn';

const socialMediaButtons = {
    servify: [
        {icon: externalLinkSymbol, href: "https://www.servifyapp.com/", targetBlank: true}
    ],
    tusVerdes: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/tus-verdes", targetBlank: true},
        {icon: externalLinkSymbol, href: "https://www.tusverdes.com/", targetBlank: true}
    ],
    bonpreuFoods: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/Bonpreu-Foods", targetBlank: true},
        {icon: externalLinkSymbol, href: "http://bonpreufoods.com", targetBlank: true}
    ],
    repuestosSotomayor: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/David-Sotomayor", targetBlank: true},
        {icon: externalLinkSymbol, href: "https://nameless-basin-74779.herokuapp.com", targetBlank: true}
    ],
    myReactBurgerBuilderApp: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/React-App-Burger-Builder", targetBlank: true},
        {icon: externalLinkSymbol, href: "https://my-react-burger-builder-app.firebaseapp.com/", targetBlank: true}
    ],
    personalWebsite: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/Curriculum-Vitae", targetBlank: true},
        {icon: externalLinkSymbol, href: "https://robertmolina.com", targetBlank: true}
    ]
};

const mapSocialMediaButtons = (socialMediaData) => {
    return socialMediaData.map( (Button, index) => {
        return <SocialMediaButton key={index} svg={Button.icon} href={Button.href} targetBlank={Button.targetBlank}/>
    });
}

export const projectsData = {
    servify: {
        front: (
            <ProjectFront 
                className={classes.ServifyFront}
                media={<Video width={'100%'} height={'auto'} src={servifyVideo} />}
                header={'Servify'}
                description={'A great app for your everyday needs.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={servifyIcon}
                className={classes.ServifyBack}
                header={'In Servify I was in charge of developing the entirety of the web app and part of the backend.'}
                featuresList={[
                    'Made with React.js.',
                    'Hosted on Firebase.',
                    'Backend hosted on the Firebase Cloud Functions, so that it can fetch data to the mobile application too.',
                    'Real-time database.',
                    'Almost entirely made from custom React components and CSS, for great scalability.',
                    'Simple yet very user friendly design.'
                ]}
                websiteOnly
                >{mapSocialMediaButtons(socialMediaButtons.servify)}</ProjectBack>
        )
    },
    tusVerdes: {
        front: (
            <ProjectFront 
                className={classes.TusVerdesFront}
                media={<ImageFadeIn
                        draggable='false'
                        noWrapper
                        src={tusVerdesImage} />}
                header={'Tus Verdes'}
                description={'A web app that calculates dollars to local currency conversion for Venezuelans due to hyperinflation.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={tusVerdesIcon}
                className={classes.TusVerdesBack}
                header={'Tus Verdes is a web app made for Venezuelans to help them keep up with hyperinflation and local price conversions.'}
                featuresList={[
                    'Made with React.js.',
                    'Calculates prices by calling a backend route.',
                    'Backend hosted through Firebase Cloud Functions.',
                    'Stores prices in a realtime database, which increases the speed when fetching data for other users.',
                ]}>{mapSocialMediaButtons(socialMediaButtons.tusVerdes)}</ProjectBack>
        )
    },
    bonpreuFoods: {
        front: (
            <ProjectFront 
                className={classes.BonpreuFoodsFront}
                media={<Video width={'100%'} height={'auto'} src={bonpreuFoodsVideo} />}
                header={'Bonpreu Foods'}
                description={'E-commerce web app developed for Bonpreu Foods.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={bonpreuFoodsImage}
                className={classes.BonpreuFoodsBack}
                header={'E-commerce oriented web app offering subscription plans covering the meals for the whole week. Featuring:'}
                featuresList={[
                    'Full blown backend.',
                    'Secure payment handling.',
                    'Global shopping cart.',
                    'User subscription managing.',
                    'Products managing.',
                    'And more!'
                ]}>{mapSocialMediaButtons(socialMediaButtons.bonpreuFoods)}</ProjectBack>
        )
    },
    repuestosSotomayor: {
        front: (
            <ProjectFront 
                className={classes.RepuestosSotomayorFront}
                media={<Video width={'100%'} height={'auto'} src={repuestosSotomayorVideo} />}
                header={'Sotomayor Autoparts'}
                description={'Website developed for Sotomayor Autoparts.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={repuestosSotomayorImage}
                className={classes.RepuestosSotomayorBack}
                header={'Simple yet elegant website showcasing their product categories & images. Amongst its features are:'}
                featuresList={[
                    'Simple backend handling emails with Nodemailer.',
                    'Contact form through the website.',
                    'Dynamic opening & closing hours with MomentJS.',
                    'Instagram images by using Instafeed API.',
                ]}>{mapSocialMediaButtons(socialMediaButtons.repuestosSotomayor)}</ProjectBack>
        )
    },
    personalWebsite: {
        front: (
            <ProjectFront 
                className={classes.PersonalWebsiteFront}
                media={<Video width={'100%'} height={'auto'} src={personalWebsiteVideo} />}
                header={'Portfolio'}
                description={'This very same website (duh).'} />
        ),
        back: (
            <ProjectBack 
                className={classes.PersonalWebsiteBack}
                header={'Designed using React.js and custom React components for scalability.'}
                featuresList={[
                    'Lazy loading with React.lazy() to load the routes in file chunks.',
                    'Usage of react-redux and redux-saga, because why not?',
                    'Heavily used an OOP design approach for scalability.',
                    'Fully custom CSS and React components.'
                ]}>{mapSocialMediaButtons(socialMediaButtons.personalWebsite)}</ProjectBack>
        )
    },
    myReactBurgerBuilderApp: {
        front: (
            <ProjectFront 
                className={classes.MyReactBurgerBuilderAppFront}
                media={<Video width={'100%'} height={'auto'} src={myReactBurgerBuilderAppVideo} />}
                header={'Burger Builder'}
                description={'This project was my React.js course project.'} />
        ),
        back: (
            <ProjectBack 
                className={classes.MyReactBurgerBuilderAppBack}
                header={'My course project in which I learned core React.js features such as:'}
                featuresList={[
                    'axios,',
                    'react-router-dom,',
                    'react-redux,',
                    'redux-thunk and redux-saga,',
                    'React.lazy(), and many, many more things :)',
                    'Shoutout to Academind and all the good folk supporting the community!'
                ]}>{mapSocialMediaButtons(socialMediaButtons.myReactBurgerBuilderApp)}</ProjectBack>
        )
    },
    unrealEngineGame: {
        front: (
            <div style={{height: '100%'}} className={classes.WorkInProgressFront}>
                <h1>Unreal Engine Game</h1>
                <img style={{display: 'block', margin: '45px auto', width: 75}} src={underConstruction} alt='' />
                <img style={{display: 'block', margin: 'auto', width: 100}} src={unrealEngine} alt='' />
            </div>
        ),
        back: (
            <div style={{height: '100%'}} className={classes.WorkInProgressBack}>
                <h2>In development.</h2>
                <br />
                <h2>It's gonna take a while.</h2>
                <img style={{display: 'block', margin: '45px auto', width: 55}} src={underConstruction} alt='' />
                <img style={{display: 'block', margin: 'auto', width: 50}} src={unrealEngine} alt='' />
            </div>
        )
    }
}
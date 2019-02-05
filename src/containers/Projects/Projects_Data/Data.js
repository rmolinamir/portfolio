import React from 'react';
// CSS
import classes from './Data.module.css';
// Media & assets
// Tus verdes
import tusVerdesImage from '../../../assets/projects/tus-verdes/tus-verdes.png';
// Bonpreu Foods
import bonpreuFoodsVideo from '../../../assets/projects/bonpreu-foods/bonpreu-foods.mp4';
import bonpreuFoodsImage from '../../../assets/projects/bonpreu-foods/bonpreu-foods.png';
// Autoparts Sotomayor
import repuestosSotomayorVideo from '../../../assets/projects/sotomayor-autoparts/sotomayor-autoparts.mp4';
import repuestosSotomayorImage  from '../../../assets/projects/sotomayor-autoparts/sotomayor-autoparts-2.png';
// React Course Project
import myReactBurgerBuilderAppVideo from '../../../assets/projects/burger-builder-app/burger-builder-app.mp4';
import myReactBurgerBuilderAppImage from '../../../assets/projects/burger-builder-app/burger-builder-app.png';
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
    tusVerdes: {
        front: (
            <ProjectFront 
                className={classes.BonpreuFoodsFront}
                media={<ImageFadeIn
                        draggable='false'
                        noWrapper
                        src={tusVerdesImage} />}
                header={'Web app that calculates hyperinflation conversion for Venezuelans local currency'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={bonpreuFoodsImage}
                className={classes.BonpreuFoodsBack}
                Header={'Tus Verdes is a web app made for Venezuelans to help them keep up with hyperinflation and local price conversions.'}
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
                header={'Business website developed for the Bonpreu Foods company.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={bonpreuFoodsImage}
                className={classes.BonpreuFoodsBack}
                Header={'E-commerce oriented web app offering subscription plans covering the meals for the whole week. Featuring:'}
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
                header={'Website developed for the Sotomayor Autoparts company.'} />
        ),
        back: (
            <ProjectBack 
                backgroundImage={repuestosSotomayorImage}
                className={classes.RepuestosSotomayorBack}
                Header={'Simple yet elegant website showcasing their product categories & images. Amongst its features are:'}
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
                header={'This very same website (duh).'} />
        ),
        back: (
            <ProjectBack 
                className={classes.PersonalWebsiteBack}
                Header={'Designed using React.js and custom components for scalability.'}
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
                header={'React Burger Builder, my React.js course project.'} />
        ),
        back: (
            <ProjectBack 
                className={classes.MyReactBurgerBuilderAppBack}
                Header={'My course project in which I learned core React.js features such as:'}
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
        // front: {
        //     classes: [classes.WorkInProgressFront].join(' '),
        //     card: null,
        //     content: (
        //         <>
        //             <h1>Unreal Engine Game</h1>
        //             <img style={{display: 'block', margin: '45px auto', width: 75}} src={underConstruction} alt='' />
        //             <img style={{display: 'block', margin: 'auto', width: 100}} src={unrealEngine} alt='' />
        //         </>
        //     )
        // },
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
        // back: {
        //     classes: [classes.WorkInProgressBack].join(' '),
        //     card: null,
        //     content: (
        //         <>  
        //             <h2>In development.</h2>
        //             <br />
        //             <h2>It's gonna take a while.</h2>
        //             <img style={{display: 'block', margin: '45px auto', width: 55}} src={underConstruction} alt='' />
        //             <img style={{display: 'block', margin: 'auto', width: 50}} src={unrealEngine} alt='' />
        //         </>
        //     )
        // }
    },
}
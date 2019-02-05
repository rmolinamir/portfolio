import React from 'react';
// CSS
import classes from './Data.module.css';
// Media & assets
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
import Front from '../../../components/Projects/Project/Front/Front';
import ProjectBack from '../../../components/Projects/Project/Back/Back';
import SocialMediaButton from '../../../components/UI/SocialMediaButton/SocialMediaButton';

const socialMediaButtons = {
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
    bonpreuFoods: {
        classes: '',
        front: {
            classes: [classes.BonpreuFoodsFront].join(' '),
            card: bonpreuFoodsVideo,
            content: (
                <Front header={'Business website developed for the Bonpreu Foods company.'} />
            )
        },
        back: {
            classes: [classes.BonpreuFoodsBack].join(' '),
            card: bonpreuFoodsImage,
            content: (
                <ProjectBack 
                backContentHeader={'E-commerce oriented web app offering subscription plans covering the meals for the whole week. Featuring:'}
                featuresList={[
                    'Full blown backend.',
                    'Secure payment handling.',
                    'Global shopping cart.',
                    'User subscription managing.',
                    'Products managing.',
                    'And more!'
                ]}>{mapSocialMediaButtons(socialMediaButtons.bonpreuFoods)}</ProjectBack>
            )
        }
    },
    repuestosSotomayor: {
        front: {
            classes: [classes.RepuestosSotomayorFront].join(' '),
            card: repuestosSotomayorVideo,
            content: (
                <Front header={'Website developed for the Sotomayor Autoparts company.'} />
            )
        },
        back: {
            classes: [classes.RepuestosSotomayorBack].join(' '),
            card: repuestosSotomayorImage,
            content: (
                <ProjectBack 
                backContentHeader={'Simple yet elegand website showcasing their product categories & images. Amongst its features are:'}
                featuresList={[
                    'Simple backend handling emails with Nodemailer.',
                    'Contact form through the website.',
                    'Dynamic opening & closing hours with MomentJS.',
                    'Instagram images by using Instafeed API.',
                ]}>{mapSocialMediaButtons(socialMediaButtons.repuestosSotomayor)}</ProjectBack>
            )
        }
    },
    myReactBurgerBuilderApp: {
        front: {
            classes: [classes.MyReactBurgerBuilderAppFront].join(' '),
            card: myReactBurgerBuilderAppVideo,
            content: (
                <Front header={'React Burger Builder, my React.js course project.'} />                
            ),
        },
        back: {
            classes: [classes.MyReactBurgerBuilderAppBack].join(' '),
            card: myReactBurgerBuilderAppImage,
            content: (
                <ProjectBack 
                backContentHeader={'A course project in which I learned core React.js features such as:'}
                featuresList={[
                    'Axios.',
                    'React-Router-Dom.',
                    'React-Redux.',
                    'Redux-Thunk and Redux-Saga.',
                    'React.lazy().'
                ]}>{mapSocialMediaButtons(socialMediaButtons.myReactBurgerBuilderApp)}</ProjectBack>
            )
        }
    },
    personalWebsite: {
        front: {
            classes: [classes.PersonalWebsiteFront].join(' '),
            card: personalWebsiteVideo,
            content: (
                <Front header={'This very same website (duh).'} />                
            ),
        },
        back: {
            classes: [classes.PersonalWebsiteBack].join(' '),
            card: null,
            content: (
                <ProjectBack 
                    backContentHeader={'Made using React.js, it features:'}
                    featuresList={[
                        'Lazy loading with React.lazy() to load the files in chunks.',
                        'Usage of React-Redux and Redux-Saga.',
                        'Heavily used an OOP design approach for scalability.',
                        'Fully custom CSS and React components.'
                    ]}>{mapSocialMediaButtons(socialMediaButtons.personalWebsite)}</ProjectBack>
            )
        }
    },
    unrealEngineGame: {
        front: {
            classes: [classes.WorkInProgressFront].join(' '),
            card: null,
            content: (
                <>
                    <h1>Unreal Engine Game</h1>
                    <img style={{display: 'block', margin: '45px auto', width: 75}} src={underConstruction} alt='' />
                    <img style={{display: 'block', margin: 'auto', width: 100}} src={unrealEngine} alt='' />
                </>
            )
        },
        back: {
            classes: [classes.WorkInProgressBack].join(' '),
            card: null,
            content: (
                <>  
                    <h2>In development.</h2>
                    <br />
                    <h2>It's gonna take a while.</h2>
                    <img style={{display: 'block', margin: '45px auto', width: 55}} src={underConstruction} alt='' />
                    <img style={{display: 'block', margin: 'auto', width: 50}} src={unrealEngine} alt='' />
                </>
            )
        }
    },
}
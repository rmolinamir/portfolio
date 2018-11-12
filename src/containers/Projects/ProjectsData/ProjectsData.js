import React from 'react';

import classes from './ProjectsData.module.css';

import ProjectFront from '../../../components/Projects/Project/ProjectFront/ProjectFront';
import ProjectBack from '../../../components/Projects/Project/ProjectBack/ProjectBack';
import SocialMediaButton from '../../../components/UI/SocialMediaButton/SocialMediaButton';

import bonpreuFoodsVideo from '../../../assets/projects/BonpreuFoods/BonpreuFoods.mp4';
import bonpreuFoodsImage from '../../../assets/projects/BonpreuFoods/BonpreuFoods.png';

import repuestosSotomayorVideo from '../../../assets/projects/RepuestosSotomayor/RepuestosSotomayor.mp4';
import repuestosSotomayorImage  from '../../../assets/projects/RepuestosSotomayor/RepuestosSotomayor2.png';

import personalWebsiteVideo  from '../../../assets/projects/PersonalWebsite/PersonalWebsite.mp4';

import githubSVG from '../../../assets/svg/github-icon.svg';
import externalLinkSymbol from '../../../assets/svg/external-link-symbol.svg';

import underConstruction from '../../../assets/svg/under-construction.svg';
import unityLogo from '../../../assets/svg/unity-logo.svg';

const socialMediaButtons = {
    bonpreuFoods: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/Bonpreu-Foods", targetBlank: true},
        {icon: externalLinkSymbol, href: "http://bonpreufoods.com", targetBlank: true}
    ],
    repuestosSotomayor: [
        {icon: githubSVG, href: "https://github.com/rmolinamir/David-Sotomayor", targetBlank: true},
        {icon: externalLinkSymbol, href: "https://nameless-basin-74779.herokuapp.com", targetBlank: true}
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
                <ProjectFront header={'Business Website developed for the Bonpreu Foods company.'} />
            )
        },
        back: {
            classes: [classes.BonpreuFoodsBack].join(' '),
            card: bonpreuFoodsImage,
            content: (
                <ProjectBack 
                backContentHeader={'Ecommerce oriented web app offering subscription plans that cover the meals for the whole week! It features:'}
                featuresList={[
                    'Full blown backend',
                    'Secure payment handling',
                    'Global shopping cart',
                    'User subscription managing',
                    'Products managing',
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
                <ProjectFront header={'Business Web App developed for the Sotomayor Autoparts company.'} />
            )
        },
        back: {
            classes: [classes.RepuestosSotomayorBack].join(' '),
            card: repuestosSotomayorImage,
            content: (
                <ProjectBack 
                backContentHeader={'Simple Web App showcasing their product categories. Amongst its features are:'}
                featuresList={[
                    'Simple backend handling emails with Nodemailer',
                    'Dynamic opening & closing hours with MomentJS',
                    'Instagram images by using Instafeed',
                    'Contact form through the website'
                ]}>{mapSocialMediaButtons(socialMediaButtons.repuestosSotomayor)}</ProjectBack>
            )
        }
    },
    personalWebsite: {
        front: {
            classes: [classes.PersonalWebsiteFront].join(' '),
            card: personalWebsiteVideo,
            content: (
                <ProjectFront header={'This very same Web App done for myself!'} />                
            ),
        },
        back: {
            classes: [classes.PersonalWebsiteBack].join(' '),
            card: null,
            content: (
                <ProjectBack 
                backContentHeader={'Powered by the awesome framework React.js, it features:'}
                featuresList={[
                    'React-router-dom for the routes, and React.lazy() to load the files in chunks.',
                    'Usage of React-Redux and Redux-Sagas.',
                    'Heavily used an OOP design approach for scalability',
                    'Fully custom CSS and React components'
                ]}>{mapSocialMediaButtons(socialMediaButtons.personalWebsite)}</ProjectBack>
            )
        }
    },
    unityGame1: {
        front: {
            classes: [classes.WorkInProgress].join(' '),
            card: null,
            content: (
                <>
                    <h1>Unity 3D Game</h1>
                    <img style={{display: 'block', margin: '45px auto', width: 75}} src={underConstruction} alt='' />
                    <img style={{display: 'block', margin: 'auto', width: 200}} src={unityLogo} alt='' />
                </>
            )
        },
        back: {
            classes: [classes.WorkInProgress].join(' '),
            card: null,
            content: (
                <>  
                    <h1>In development!</h1>
                    <img style={{display: 'block', margin: '45px auto', width: 75}} src={underConstruction} alt='' />
                    <img style={{display: 'block', margin: 'auto', width: 200}} src={unityLogo} alt='' />
                </>
            )
        }
    },
}
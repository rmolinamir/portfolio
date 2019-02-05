import React, { Component } from 'react';
// data
import { designsData } from './PSD_Desings_Data/Desings_Data';
// CSS
import classes from './PSD_Desings.module.css';
// JSX
import Design from '../../components/PSD_Designs/Design/Design';
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';
import Container from '../../components/UI/Container/Container';
import Separator from '../../components/UI/Separator/Separator';

class Projects extends Component {
    render () {
        return (
            <div className={classes.Wrapper}>
                <IntroHeader>My Designs</IntroHeader>
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
                        );
                    })}
                </Container>
            </div>
        );
    }
}

export default Projects;

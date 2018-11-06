import React, { Component } from 'react';

import Import from '../../../components/UI/Code/Import/Import';
import Class from '../../../components/UI/Code/Class/Class';
import Method from '../../../components/UI/Code/Method/Method';
import Export from '../../../components/UI/Code/Export/Export';

import classes from './Code.module.css'

class Code extends Component {

    constructor(props) {
        super(props)
        this.isInViewportElements = {
            education: React.createRef(),
            tools: React.createRef(),
            skills: React.createRef()
        }
    }

    state = {
        isInViewport: {}
    }

    isInViewport = (event, offset = 50 ) => {
        Object.keys(this.isInViewportElements).forEach( key => {
            if (this.isInViewportElements) {
                if (window.scrollY > this.isInViewportElements[key].current.offsetTop + offset && !this.state.isInViewport[key]) {
                    const setStateObject = {
                        ...this.state.isInViewport,
                        [key]: true
                    }
                    this.setState({ 
                        isInViewport:setStateObject 
                    });
                }
            }
        });
    }

    componentDidMount () {
        window.addEventListener('scroll', (el) => this.isInViewport(el, 100));
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', (el) => this.isInViewport(el, 100));
    }

    render () {

        const curriculumVitae = {
            import: {
                defaultImport: 'Information',
                import: 'Experience',
                package: 'life'
            },
            class: {
                name: 'Resume',
                extends: 'Experience'
            },
            method: {
                education: {
                    method: 'details',
                    argument: 'Education'
                },
                skills: {
                    method: 'details',
                    argument: 'Skills'
                },
                tools: {
                    method: 'details',
                    argument: 'Tools'
                }
            },
            export: {
                export: 'Information'
            }
        }

        return (
            <div  className={classes.Code}>
                <div className={classes.CodeWrapper}>
                    <Import defaultImport={curriculumVitae.import.defaultImport} import={curriculumVitae.import.import} package={curriculumVitae.import.package} />
                    <Class name={curriculumVitae.class.name} extends={curriculumVitae.class.extends}>
                        <div ref={this.isInViewportElements.education}>
                            {this.state.isInViewport.education ?
                                <Method method={curriculumVitae.method.education.method} argument={curriculumVitae.method.education.argument}>
                                    <span>Full Stack Web Development, Backend Logic, Data Visualization, Flat Design, Vector Illustrations, & Unity games!</span>
                                </Method>
                            : null}
                        </div>
                        <div ref={this.isInViewportElements.skills}>
                            {this.state.isInViewport.skills ?
                                <Method method={curriculumVitae.method.skills.method} argument={curriculumVitae.method.skills.argument}>
                                    <span>Full Stack Web Development, Backend Logic, Data Visualization, Flat Design, Vector Illustrations, & Unity games!</span>
                                </Method>
                            : null}
                        </div>
                        <div ref={this.isInViewportElements.tools}>
                            {this.state.isInViewport.tools ?
                                <Method method={curriculumVitae.method.tools.method} argument={curriculumVitae.method.tools.argument}>
                                    <span>React.js - HTML, CSS, JavaScript, ES6, Next-Gen JS, Babel, Webpack, Loaders. - jQuery, Bootstrap 3 & 4, - Node.js, Express.js, - MongoDB, Firebase - Git, Heroku.</span>
                                </Method>
                            : null}
                        </div>
                    </Class>
                    <Export export={curriculumVitae.export.export}/>
                </div>
            </div>
        );
    }
}

export default Code;
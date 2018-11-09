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
            import: React.createRef(),
            class: React.createRef(),
            education: React.createRef(),
            tools: React.createRef(),
            skills: React.createRef(),
            export: React.createRef()
        }
    }

    state = {
        isInViewport: {}
    }

    isInViewport = (offset = 50 ) => {
        Object.keys(this.isInViewportElements).forEach( key => {
            if (!this.isInViewportElements[key].current) {return};
            if (window.scrollY > this.isInViewportElements[key].current.offsetTop + offset && !this.state.isInViewport[key]) {
                const setStateObject = {
                    ...this.state.isInViewport,
                    [key]: true
                }
                this.setState({ 
                    isInViewport:setStateObject 
                });
            }
        });
    }

    componentDidMount () {
        window.addEventListener('scroll', () => this.isInViewport(100));
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', () => this.isInViewport(100));
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
                    <div ref={this.isInViewportElements.import}>
                        {this.state.isInViewport.import ?
                            <Import defaultImport={curriculumVitae.import.defaultImport} import={curriculumVitae.import.import} package={curriculumVitae.import.package} />
                        : null}
                    </div>
                    <div ref={this.isInViewportElements.class}>
                        {this.state.isInViewport.class ?
                            <Class name={curriculumVitae.class.name} extends={curriculumVitae.class.extends}>
                                <div ref={this.isInViewportElements.education}>
                                    {this.state.isInViewport.education ?
                                        <Method method={curriculumVitae.method.education.method} argument={curriculumVitae.method.education.argument}>
                                            <span>
                                                Major in <span className={classes.String}>Mechanical Engineering</span>, turns out I like to code more than I like to build parts, so here I am!
                                                I'm Passionate about computer science, with strong technical, commercial and interpersonal skills,
                                                allowing me to work as a team and successfully complete any project.
                                            </span>
                                        </Method>
                                    : null}
                                </div>
                                <div ref={this.isInViewportElements.skills}>
                                    {this.state.isInViewport.skills ?
                                        <Method method={curriculumVitae.method.skills.method} argument={curriculumVitae.method.skills.argument}>
                                            <span>
                                                I'm adept at Fullstack Web Development, lots of Backend Logic & Procceses, Data Visualization, Vector Illustrations, &
                                                Unity 3D games development as a side hobby.
                                            </span>
                                        </Method>
                                    : null}
                                </div>
                                <div ref={this.isInViewportElements.tools}>
                                    {this.state.isInViewport.tools ?
                                        <Method method={curriculumVitae.method.tools.method} argument={curriculumVitae.method.tools.argument}>
                                            <span>
                                                MongoDB, Firebase, Express, React.js (often using Redux, Saga, Router-DOM, Next.js, etc.), Node.js.<br />
                                                Always using Webpack with Babel, tons of other loaders.<br />
                                                JavaScript, ES6, Next-Gen JS, HTML, CSS, - jQuery, and sometimes Bootstrap 3 & 4 for quick projects. C#.<br/>
                                                Deploying done through Firebase and/or Heroku.<br />
                                                Made a habit of using Git and Github.
                                            </span>
                                        </Method>
                                    : null}
                                </div>
                            </Class>
                        : null}
                    </div>
                    <div ref={this.isInViewportElements.export}>
                        {this.state.isInViewport.export ?
                            <Export export={curriculumVitae.export.export}/>
                        : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Code;
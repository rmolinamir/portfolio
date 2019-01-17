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
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    Major in <span className={classes.String}>Mechanical Engineering</span>, turns out I like to code more 
                                                    than I like to build parts though. I'm Passionate about computer science, with strong technical, commercial 
                                                    and interpersonal skills, allowing me to work as a team and successfully complete any project.
                                                </div>
                                                <br />
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    For more information about my previous projects, you may go to the projects tab down at the bottom.
                                                </div>
                                            </span>
                                        </Method>
                                    : null}
                                </div>
                                <div ref={this.isInViewportElements.skills}>
                                    {this.state.isInViewport.skills ?
                                        <Method method={curriculumVitae.method.skills.method} argument={curriculumVitae.method.skills.argument}>
                                            <span>
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    I'm adept at Fullstack Development, Backend Procceses, Data Visualization, and Vector Illustrations.
                                                    I'm also profficient with Data Analytics and Engineering software such as SolidWorks, AutoCAD, and such,
                                                    due to my major in Mechanical Engineering. 
                                                </div>
                                                <br/>
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    I program in the Unreal Engine software as a side hobby. If you want more information, you may go 
                                                    to the skills tab by clicking the link down at the bottom.
                                                </div>
                                            </span>
                                        </Method>
                                    : null}
                                </div>
                                <div ref={this.isInViewportElements.tools}>
                                    {this.state.isInViewport.tools ?
                                        <Method method={curriculumVitae.method.tools.method} argument={curriculumVitae.method.tools.argument}>
                                            <span>
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    When it comes to frontend development, I find myself using React.js (often using Redux, 
                                                    Saga, Router-DOM, Next.js, etc.) all the time.
                                                </div>
                                                <br />
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    If I'm doing anything backend related, my go-to software are: MongoDB, Firebase, 
                                                    Express, Node.js. It all depends on the context.
                                                </div>
                                                <br />
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    Nowadays I'm practially always using Webpack with Babel, and tons of other loaders 
                                                    (create-react-app for the win though).
                                                </div>
                                                <br />
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    Amongst my programming languages, I pretty much focus on JavaScript, ES6, Next-Gen JS, HTML, CSS, 
                                                    jQuery (practically no more jQuery nowadays though), and very rarely Bootstrap 3 & 4 for quick projects. 
                                                    Aside from JavaScript I have basic knowledge of, C# and Java and a somewhat intermediate knowledge
                                                    of  C++ due to Unreal Engine.
                                                </div>
                                                <br />
                                                <div style={{display: 'block', marginLeft: 0}}>
                                                    I do hosting and deployments almost entirely through Firebase and/or Heroku. Many people dislike
                                                    Firebase, but I find it really useful for understaffed projects or quick ones.
                                                </div>
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
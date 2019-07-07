import React, { Component } from 'react'
// CSS
import classes from './Code.module.css'
// JSX
import Import from '../../../components/AboutMe/Code/Import/Import'
import Class from '../../../components/AboutMe/Code/Class/Class'
import Method from '../../../components/AboutMe/Code/Method/Method'
import Export from '../../../components/AboutMe/Code/Export/Export'

class Code extends Component {
  constructor(props) {
    super(props)
    this.isInViewportElements = {
      import: React.createRef(),
      class: React.createRef(),
      education: React.createRef(),
      stack: React.createRef(),
      skills: React.createRef(),
      export: React.createRef()
    }
  }

  state = {
    isInViewport: {}
  }

  isInViewport = (offset = 100) => {
    Object.keys(this.isInViewportElements).forEach(key => {
      if (!this.isInViewportElements[key].current) { return }
      if (window.scrollY > this.isInViewportElements[key].current.offsetTop + offset && !this.state.isInViewport[key]) {
        const setStateObject = {
          ...this.state.isInViewport,
          [key]: true
        }
        this.setState({
          isInViewport: setStateObject
        })
      }
    })
  }

  componentDidMount () {
    window.addEventListener('scroll', () => this.isInViewport(100))
    window.addEventListener('resize', this.recalculateMinHeight)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', () => this.isInViewport(100))
    window.removeEventListener('resize', this.recalculateMinHeight)
  }

  render () {
    const curriculumVitae = {
      import: {
        defaultImport: 'Knowledge',
        import: 'Experience',
        package: 'life'
      },
      class: {
        name: 'Information',
        extends: 'Experience'
      },
      method: {
        education: {
          method: 'renderEducation',
          argument: 'Education'
        },
        skills: {
          method: 'renderSkills',
          argument: 'Skills'
        },
        stack: {
          method: 'renderStack',
          argument: 'Stack'
        }
      },
      export: {
        export: 'Information'
      }
    }
    return (
      <div className={classes.Wrapper}>
        <div
          className={classes.Container}>
          <div
            ref={this.isInViewportElements.import}
            style={{
              opacity: this.state.isInViewport.import ? 1 : 0
            }}
          >
            <Import
              shouldStartTyping={this.state.isInViewport.import}
              defaultImport={curriculumVitae.import.defaultImport}
              import={curriculumVitae.import.import}
              package={curriculumVitae.import.package} />
          </div>
          <div
            ref={this.isInViewportElements.class}
            style={{
              opacity: this.state.isInViewport.class ? 1 : 0
            }}
          >
            <Class
              shouldStartTyping={this.state.isInViewport.class}
              name={curriculumVitae.class.name}
              extends={curriculumVitae.class.extends}
            >
              <div ref={this.isInViewportElements.education}>
                <Method
                  shouldStartTyping={this.state.isInViewport.education}
                  method={curriculumVitae.method.education.method}
                  argument={curriculumVitae.method.education.argument}
                >
                  <span>
                    <div style={{ display: 'block', marginLeft: 0 }}>
                      I'm a <span className={classes.String}>Mechanical Engineering</span> graduate who ended up loving programming more
                      than the engineering aspect after about 2 years while working in the field. Currently, I'm part of the tech team at <span className={classes.String}>Bridge for Billions</span> as a
                      React.js Software Developer, collaborating in the development of the frontend application.
                    </div>
                    <br />
                    <div style={{ display: 'block', marginLeft: 0 }}>
                      I'm very passionate about computer science,
                      with strong technical, commercial and interpersonal skills, allowing me to work as a team and successfully
                      complete any project. For more information about my previous projects, you may visit the projects tab down at the bottom.
                    </div>
                  </span>
                </Method>
              </div>
              <div
                ref={this.isInViewportElements.skills}
                style={{
                  opacity: this.state.isInViewport.skills ? 1 : 0
                }}
              >
                <Method
                  shouldStartTyping={this.state.isInViewport.skills}
                  method={curriculumVitae.method.skills.method}
                  argument={curriculumVitae.method.skills.argument}
                >
                  <span>
                    <div style={{ display: 'block', marginLeft: 0 }}>
                        I'm well versed with <span className={classes.String}>Fullstack/Software Development</span>, <span className={classes.String}>Data Visualization</span>, and <span className={classes.String}>Vector Illustrations</span>.
                        I'm also proficient with <span className={classes.String}>Data Analytics</span> and Engineering software such as <span className={classes.String}>SolidWorks</span>, <span className={classes.String}>FluidSIM</span> & <span className={classes.String}>AutoCAD</span>,
                        due to my bachelor in Mechanical Engineering.
                    </div>
                    <br />
                    <div style={{ display: 'block', marginLeft: 0 }}>
                        I program in the <span className={classes.String}>Unreal Engine</span> software as a side hobby or a few other pet projects occasionally. If you want
                        more information, you may go to the skills tab by clicking the link down at the bottom.
                    </div>
                  </span>
                </Method>
              </div>
              <div
                ref={this.isInViewportElements.stack}
                style={{
                  opacity: this.state.isInViewport.stack ? 1 : 0
                }}
              >
                <Method
                  shouldStartTyping={this.state.isInViewport.stack}
                  method={curriculumVitae.method.stack.method}
                  argument={curriculumVitae.method.stack.argument}
                >
                  <div style={{ display: 'block', marginLeft: 0 }}>
                    Some of the tools I commonly use:
                    <br />
                    <ul style={{
                      margin: '8px 0 0',
                      padding: 0,
                      paddingLeft: '24px'
                    }}>
                      <li>React.js</li>
                      <li>MongoDB</li>
                      <li>Google's Firebase</li>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>TypeScript</li>
                      <li>CSS3/Sass</li>
                      <li>C++</li>
                    </ul>
                  </div>
                </Method>
              </div>
            </Class>
          </div>
          <div
            ref={this.isInViewportElements.export}
            style={{
              opacity: this.state.isInViewport.export ? 1 : 0
            }}
          >
            <Export
              shouldStartTyping={this.state.isInViewport.export}
              export={curriculumVitae.export.export}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Code

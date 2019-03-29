import React, { Component } from 'react'
// CSS
import classes from './Code.module.css'
// JSX
import Import from '../../../components/AboutMe/Code/Import/Import'
import Class from '../../../components/AboutMe/Code/Class/Class'
import Method from '../../../components/AboutMe/Code/Method/Method'
import Export from '../../../components/AboutMe/Code/Export/Export'

const minHeightEquation = (windowWidth = window.innerWidth) => {
  const minHeight = (
    1.2263052164879462e+004 * Math.pow(windowWidth, 0) +
    -4.5231303712208273e+001 * Math.pow(windowWidth, 1) +
    7.5546487662990325e-002 * Math.pow(windowWidth, 2) +
    -6.4047963254580177e-005 * Math.pow(windowWidth, 3) +
    2.8971976289126083e-008 * Math.pow(windowWidth, 4) +
    -6.6610627926403397e-012 * Math.pow(windowWidth, 5) +
    6.1148983275028627e-016 * Math.pow(windowWidth, 6)
  )
  return minHeight * 1.05
}

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
    isInViewport: {},
    minHeight: minHeightEquation()
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

  recalculateMinHeight = () => {
    this.setState({
      minHeight: minHeightEquation()
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
      <div className={classes.Wrapper}>
        <div
          style={{
            minHeight: this.state.minHeight
          }}
          className={classes.Container}>
          <div ref={this.isInViewportElements.import}>
            {this.state.isInViewport.import && (
              <Import defaultImport={curriculumVitae.import.defaultImport} import={curriculumVitae.import.import} package={curriculumVitae.import.package} />
            )}
          </div>
          <div ref={this.isInViewportElements.class}>
            {this.state.isInViewport.class && (
              <Class name={curriculumVitae.class.name} extends={curriculumVitae.class.extends}>
                <div ref={this.isInViewportElements.education}>
                  {this.state.isInViewport.education && (
                    <Method method={curriculumVitae.method.education.method} argument={curriculumVitae.method.education.argument}>
                      <span>
                        <div style={{ display: 'block', marginLeft: 0 }}>
                          Major in <span className={classes.String}>Mechanical Engineering</span>, I ended up liking to code more
                          than I like to build parts nearing the end of my major. I'm very passionate about computer science, with strong
                          technical, commercial and interpersonal skills, allowing me to work as a team and successfully complete any project.
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                          For more information about my previous projects, you may go to the projects tab down at the bottom.
                        </div>
                      </span>
                    </Method>
                  )}
                </div>
                <div ref={this.isInViewportElements.skills}>
                  {this.state.isInViewport.skills && (
                    <Method method={curriculumVitae.method.skills.method} argument={curriculumVitae.method.skills.argument}>
                      <span>
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            I'm adept at Fullstack Development, Backend Procceses, Data Visualization, and Vector Illustration.
                            I'm also profficient with Data Analytics and Engineering software such as SolidWorks, AutoCAD, and such,
                            due to my major in Mechanical Engineering.
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            I program in the Unreal Engine software as a side hobby. If you want more information, you may go
                            to the skills tab by clicking the link down at the bottom.
                        </div>
                      </span>
                    </Method>
                  )}
                </div>
                <div ref={this.isInViewportElements.tools}>
                  {this.state.isInViewport.tools && (
                    <Method method={curriculumVitae.method.tools.method} argument={curriculumVitae.method.tools.argument}>
                      <span>
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            When it comes to frontend development, I find myself using React.js almost entirely (often using Redux,
                            Saga, Router-DOM, Next.js, etc.).
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            If I'm doing anything backend related, my go-to software are: MongoDB, Firebase,
                            Express, Node.js. It all depends on the context.
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            Nowadays I'm always using Webpack with Babel, and tons of other loaders
                            (create-react-app for the win though).
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            Amongst my programming languages, I focus on JavaScript, ES6, Next-Gen JS, HTML, CSS,
                            jQuery (practically no more jQuery nowadays though), and very rarely Bootstrap 3 & 4 for quick projects.
                            Aside from JavaScript I have basic knowledge of C# and Java, and a somewhat intermediate knowledge
                            of  C++ due to the Unreal Engine.
                        </div>
                        <br />
                        <div style={{ display: 'block', marginLeft: 0 }}>
                            I do hosting and deployments almost entirely through Firebase and/or Heroku. Many people dislike
                            Firebase, but I find it really useful for understaffed projects, small ones, or projects that need to be done quick.
                        </div>
                      </span>
                    </Method>
                  )}
                </div>
              </Class>
            )}
          </div>
          <div ref={this.isInViewportElements.export}>
            {this.state.isInViewport.export && <Export export={curriculumVitae.export.export} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Code

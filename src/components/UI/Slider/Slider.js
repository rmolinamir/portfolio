import React, { Component } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import PropTypes from 'prop-types'
// CSS
import classes from './Slider.module.css'
// JSX
import SlideContainer from './SlideContainer/SlideContainer'
import SliderButtons from './SliderButtons/SliderButtons'
import SliderNav from './SliderNav/SliderNav'
import SliderProgress from './SliderProgress/SliderProgress'

class Slider extends Component {
  static propTypes = {
    activeSlide: PropTypes.number,
    buttons: PropTypes.object,
    children: PropTypes.any,
    style: PropTypes.object,
    fadeIn: PropTypes.bool,
    sticky: PropTypes.bool,
    showOnlyActive: PropTypes.bool,
    renderOnlyActive: PropTypes.bool,
    disableNav: PropTypes.bool,
    progressBar: PropTypes.bool,
    alignItems: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.mySlider = React.createRef()
    this.state = {
      activeSlide: props.activeSlide > 0 ? props.activeSlide : 0,
      style: {
        transform: 'translateX(0px)',
        transition: 'transform ease 0ms' // To avoid animations on setup
      }
    }
  }

  setupSlider = () => {
    const sliderWidth = this.mySlider.current.clientWidth // Pointer to the slider's reference width
    const translateAmount = this.props.activeSlide * sliderWidth
    const style = {
      transform: `translateX(-${this.props.activeSlide * sliderWidth}px)`,
      transition: 'transform ease 0ms' // To avoid animations on setup
    }
    this.setState({
      style,
      translateAmount
      // Then removing the transition set to 0ms
    }, () => {
      this.setState({
        style: {
          ...style,
          transition: undefined
        }
      })
    })
  }

  setupWidth = () => {
    if (!this.mySlider && !this.mySlider.current) { return }
    this.setState(prevState => {
      // "Pointer" to the slider's reference width
      const sliderWidth = this.mySlider.current.clientWidth
      const translateAmount = prevState.activeSlide * sliderWidth
      const style = {
        transition: 'transform ease 0ms', // To avoid animations on setup
        transform: `translateX(-${translateAmount}px)`
      }
      return {
        style,
        translateAmount
      }
    }, () => {
      const setupTimeoutId = setTimeout(() => {
        this.setState(prevState => ({
          style: {
            ...prevState.style,
            transition: undefined
          }
        }))
      }, 500 * 1.2)
      this.setState({
        setupTimeoutId
      })
    })
  }

  onTranslateHandler = (type, toSlide) => {
    const { activeSlide } = this.state
    this.setState(prevState => {
      let operator
      // Defining the operator depending on which button was pressed
      switch (type) {
        case 'prev':
          // If the activeSlide is the first slide, then return.
          if (activeSlide <= 0) {
            return
          }
          operator = -1
          break
        case 'next':
          // If the activeSlide is the last slide, then return.
          const amountOfSlides = this.props.children.length
          if (activeSlide > amountOfSlides) {
            return
          }
          operator = +1
          break
        default:
            // do nothing
      }
      const sliderWidth = this.mySlider.current.clientWidth
      /**
       * The next active slide will be the specific slide toSlide if it exists. Otherwise,
       * it will be the result of the previous active slide and the operator.
       */
      const nextActiveSlide = toSlide ? (Number(toSlide)) : (prevState.activeSlide + operator)
      /**
       * Error prevention. f the next slide is not a number, or if the next slide + 1 exceeds
       * the amount of children, then it will return and not translate.
       */
      if (nextActiveSlide + 1 > this.props.children.length || isNaN(nextActiveSlide)) { return }
      const translateAmount = nextActiveSlide * sliderWidth
      const style = {
        transition: undefined,
        transform: `translateX(-${translateAmount}px)`
      }
      return {
        activeSlide: nextActiveSlide,
        style: style,
        translateAmount,
        isTranslating: true
      }
    /**
     * During translation, every other possible way of translating
     * must be disabled to avoid jankiness and bugs.
     */
    }, () => {
      const translatingTimeoutId = setTimeout(() => {
        this.setState({
          isTranslating: false
        })
      }, 500 * 1.2)
      this.setState({
        translatingTimeoutId
      })
    })
  }

  initialTouchState = {
    initialX: undefined,
    initialY: undefined,
    currentX: undefined,
    currentY: undefined,
    finalX: undefined,
    finalY: undefined
  }

  setTouchState = (touchState) => {
    this.setState({
      touchState
    })
  }

  /**
   * `onTouchStartHandler` sets the initial coordinates of the touch event.
   */
  onTouchStartHandler = (event) => {
    const {
      touchState,
      isTranslating
    } = this.state
    if (isTranslating) return
    const initialX = event.touches[0].clientX
    const initialY = event.touches[0].clientY
    this.setTouchState({
      ...touchState,
      initialX,
      initialY
    })
  }

  /**
   * `onTouchMoveHandler` sets the current coordinates of the touch event to the state,
   * and translated the slider based on the swiped pixels by the user.
   */
  onTouchMoveHandler = (event) => {
    const {
      activeSlide,
      touchState,
      translateAmount,
      isTranslating
    } = this.state
    if (isTranslating) return
    const currentX = event.touches[0].clientX
    const currentY = event.touches[0].clientY
    // Saves the current sliding positions.
    this.setTouchState({
      ...touchState,
      currentX,
      currentY
    })
    /**
     * Translating the slider by how much pixels the user is swiping smoothly:
     * If the difference is higher or equal to 25px or if the swiped amount is less
     * or equal to the window's width, then translate based on swipe.
     */
    const diffX = touchState && Number(touchState.initialX) - Number(touchState.currentX)
    const thresholdToSlide = 25
    /**
     * Before actually executing the swipe, we must check if the slider is at the last or first slide,
     * this way we avoid translating to empty spaces which would look weird.
     */
    const amountOfSlides = this.props.children.length
    if (
      activeSlide <= 0 &&
      diffX < 0
    ) {
      return
    } else if (
      activeSlide >= (amountOfSlides - 1) &&
      diffX > 0
    ) {
      return
    }
    /**
     * **Swiping logic:**
     */
    if (
      Math.abs(diffX) >= thresholdToSlide &&
      Math.abs(diffX) <= window.innerWidth
    ) {
      const newTranslateAmount = translateAmount + diffX
      const style = {
        transition: 'transform ease 0ms', // If the smoothness is too high during onTouch, it looks janky.
        transform: `translateX(-${newTranslateAmount}px)`
      }
      this.setState({
        ...touchState,
        currentX,
        currentY,
        style
      })
    }
  }

  /**
   * `onTouchEndHandler` determines in which direction **and** sense (vector) the user is sliding.
   * Animations are then set accordingly depending on which direction the user is dragging and
   * the slide is changed. Finally the touch state is set back to the initial state, where
   * everything is undefined.
   */
  onTouchEndHandler = () => {
    const {
      touchState,
      isTranslating
    } = this.state
    if (isTranslating) return
    const diffX = touchState && Number(touchState.initialX) - Number(touchState.currentX)
    /**
     * If the difference is higher than 50px, then slide.
     */
    const thresholdToSlide = 50
    if (
      Math.abs(diffX) >= thresholdToSlide
    ) {
      // Sliding horizontally.
      if (diffX > 0) {
        // Swiped left.
        this.onTranslateHandler('next')
      } else {
        // Swiped right.
        this.onTranslateHandler('prev')
      }
    } else {
      const { translateAmount } = this.state
      const style = { transform: `translateX(-${translateAmount}px)` }
      this.setState({
        style
      })
    }
    this.setTouchState(this.initialTouchState)
  }

  componentDidMount () {
    /**
     * The carousel needs an initial setup in case there is an active slide from the props higher than 0
     * So long as it's not less than 0 or higher than the total slides.
     */
    if (this.props.activeSlide > 0 && this.props.activeSlide < this.props.children.length) {
      this.setupSlider()
    }
  }

  /**
   * Clearing possible timeout ID's.
   */
  componentWillUnmount() {
    const {
      translatingTimeoutId,
      setupTimeoutId
    } = this.state
    if (translatingTimeoutId) clearTimeout(translatingTimeoutId)
    if (setupTimeoutId) clearTimeout(setupTimeoutId)
  }

  render() {
    let PrevButton
    let NextButton
    if (this.props.buttons) {
      PrevButton = this.props.buttons.prev
      NextButton = this.props.buttons.next
    }
    // Protection against crashes
    if (!this.props.children) { return <SlideContainer style={this.state.style}>{this.props.children}</SlideContainer> }
    /**
     * `children` include the slides and custom buttons if any.
     */
    const children = (
      this.props.children.length ? (
        Object.keys(this.props.children).map((children, index) => {
          return (
            <SlideContainer
              key={index}
              showOnlyActive={this.props.showOnlyActive && (
                this.state.activeSlide === index ? 'show' : 'hide'
              )}
              renderOnlyActive={this.props.renderOnlyActive}
              style={this.state.style}
            >
              {/* Only render the current slide if it's active. Otherwise return render null. */}
              {this.props.renderOnlyActive ? (
                this.state.activeSlide === index && this.props.children[children]
              )
                : this.props.children[children]}
              {this.props.buttons && (
                <div className={this.props.buttons.className}>
                  {React.cloneElement( // Cloning buttons to pass onTranslateHandler
                    PrevButton,
                    {
                      onClick: () => {
                        this.props.buttons.onClick.prev()
                        this.onTranslateHandler('prev')
                      },
                      totalSlides: this.props.children.length,
                      activeSlide: this.state.activeSlide
                    }
                  )}
                  {React.cloneElement( // Cloning buttons to pass onTranslateHandler
                    NextButton,
                    {
                      onClick: () => {
                        this.props.buttons.onClick.next()
                        this.onTranslateHandler('next')
                      },
                      totalSlides: this.props.children.length,
                      activeSlide: this.state.activeSlide
                    }
                  )}
                </div>
              )}
            </SlideContainer>
          )
        })
      )
        : (
          <SlideContainer
            style={this.state.style}
          >
            {this.props.children}
          </SlideContainer>
        )
    )
    const wrapperClasses = [classes.Wrapper]
    // If fade in is desired:
    if (this.props.fadeIn) wrapperClasses.push(classes.FadeIn)
    // If sticky in is desired:
    if (this.props.sticky) wrapperClasses.push(classes.Sticky)
    return (
      <div
        ref={this.mySlider}
        className={wrapperClasses.join(' ')}
        style={{
          ...this.props.style,
          alignItems: this.props.alignItems && 'center'
        }}
        onTouchStart={this.onTouchStartHandler}
        onTouchMove={this.onTouchMoveHandler}
        onTouchEnd={this.onTouchEndHandler}
      >
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.setupWidth}
        />
        {children}
        {!(this.props.buttons || !this.props.children.length) && (
          <SliderButtons
            totalSlides={this.props.children.length}
            activeSlide={this.state.activeSlide}
            onClick={this.onTranslateHandler} />)}
        {(!this.props.disableNav || !this.props.children.length) && (
          <SliderNav
            activeSlide={this.state.activeSlide}
            slides={Object.keys(this.props.children)}
            onClick={this.onTranslateHandler} />)}
        {this.props.progressBar && (
          <SliderProgress
            totalSlides={this.props.children.length}
            activeSlide={this.state.activeSlide} />
        )}
      </div>
    )
  }
}

export default Slider

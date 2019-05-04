import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './ReactPNGButton.module.css'
// JSX
import { withContexts } from 'with-context-react'
import Button, { LogoButton, Context, Provider } from 'react-png-button'
import Tooltip from 'react-png-tooltip'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../../hoc/Layout/ThemeContext/ThemeContext'

const ReactPNGButton = (props) => {
  const bIsLight = props.themeContext && props.themeContext.theme === 'light'

  const buttonRef = useRef()
  const logoButtonRef = useRef()

  const onClick = () => {
    window.alert('Open your dev tools if you want to see the printed references!')
    console.warn(buttonRef.current)
    console.warn(logoButtonRef.current)
    if (props.buttonContext && props.buttonContext.setCustomClassname && props.buttonContext.setGlobalClassName) {
      props.buttonContext.setCustomClassname('primary', classes.Primary)
      props.buttonContext.setGlobalClassName(classes.Button)
    }
  }

  useEffect(() => {
    if (props.buttonContext && props.buttonContext.setStyle) {
      props.buttonContext.setStyle({ width: '100%' })
      props.buttonContext.setCustomClassname('custom', classes.Custom)
    }
  }, [props.buttonContext])

  const buttonsArr = [
    [<Button reference={buttonRef}>Default</Button>, `<Button reference={buttonRef}>
  Default
</Button>`],
    [<Button disabled>Disabled</Button>, `<Button 
  disabled>
  Disabled
</Button>`],
    [<Button button='dark'>Dark</Button>, `<Button 
  button='dark'>
  Dark
</Button>`],
    [<Button disabled button='dark' onClick={onClick}>Disabled</Button>, `<Button
  disabled
  button='dark'
  onClick={onClick}>Disabled</Button>`],
    [<Button button='light'>Light</Button>, `<Button
  button='light'>Light</Button>`],
    [<Button disabled button='light'>Disabled</Button>, `<Button
  disabled
  button='light'>Disabled</Button>`],
    [<Button button='primary'>Primary</Button>, `<Button
  button='primary'>Primary</Button>`],
    [<Button disabled button='primary'>Disabled</Button>, `<Button
  disabled
  button='primary'>Disabled</Button>`],
    [<Button button='success'>Success</Button>, `<Button
  button='success'>Success</Button>`],
    [<Button disabled button='success'>Disabled</Button>, `<Button
  disabled
  button='success'>Disabled</Button>`],
    [<Button button='danger'>Danger</Button>, `<Button
  button='danger'>Danger</Button>`],
    [<Button disabled button='danger'>Disabled</Button>, `<Button
  disabled
  button='danger'>Disabled</Button>`],
    [<Button button='custom'>Custom</Button>, `<Button
  button='custom'>Custom</Button>`],
    [<Button disabled button='custom'>Disabled</Button>, `<Button
  disabled
  button='custom'>Disabled</Button>`]
  ]

  const blockButtonsArr = [
    [<Button blockButton>Block Button</Button>, `<Button 
  blockButton>
  Block Button
</Button>`],
    [<Button blockButton button='primary'>Primary</Button>, `<Button 
  blockButton 
  button='primary'>
  Primary
</Button>`],
    [<Button blockButton button='success'>Success</Button>, `<Button 
  blockButton 
  button='success'>
  Success
</Button>`],
    [<Button blockButton button='danger'>Danger</Button>, `<Button 
  blockButton 
  button='danger'>
  Danger
</Button>`],
    [<Button blockButton button='custom'>Custom</Button>, `<Button 
  blockButton 
  button='custom'>
  Custom
</Button>`]
  ]

  const logoButtonsArr = [
    [<LogoButton reference={logoButtonRef} button='facebook'>Sign up with Facebook</LogoButton>, `<LogoButton 
  reference={logoButtonRef} 
  button='facebook'>
  Sign up with Facebook
</LogoButton>`],
    [<LogoButton button='google'>Sign up with Google</LogoButton>, `<LogoButton button='google'>
  Sign up with Google
</LogoButton>`],
    [<LogoButton button='apple-store' />, `<LogoButton
  button='apple-store' />`],
    [<LogoButton button='google-playstore' />, `<LogoButton
  button='google-playstore' />`]
  ]

  return (
    <div className={classes.App}>
      <h1 className={classes.Title}>react-png-button</h1>
      <br />
      <div className={classes.Description}>
        <div>
          This is a flexible preset collection of multiple buttons to quickly build applications. It's highly scalable due to usage of the new <code>useContext</code> hook API which allows the developer to modify all of the buttons CSS globally or specifically.
        </div>
        <br />
        <SyntaxHighlighter
          language='jsx'
          style={bIsLight ? prism : atomDark}>
          {`import React from 'react'
import Button from 'react-png-button'

const example = () => {
  const onClickHandler = () => {
    window.alert('Hello world')
  }

  return (
    <Button onClick={onClickHandler}>PlugN'Go Button</Button>
  )
}


export default example`}
        </SyntaxHighlighter>
        <br />
        <div>
          By clicking the button bellow, you'll notice that all of the buttons CSS styling will slightly change a bit (removing border-radius and more padding) by using the <code>setGlobalClassName</code> hook.
        </div>
        <br />
        <div>
          Here's an example showcasing the usage of the <code>setCustomClassname</code> and <code>setGlobalClassName</code> hooks:
        </div>
        <div>
          <SyntaxHighlighter
            language='jsx'
            style={bIsLight ? prism : atomDark}>
            {`const onClick = () => {
  window.alert('Open your dev tools if you want to see the printed references!')
  console.log(buttonRef.current)
  console.log(logoButtonRef.current)
  props.buttonContext.setCustomClassname('primary', classes.Primary)
  props.buttonContext.setGlobalClassName(classes.Button)
}`}
          </SyntaxHighlighter>
        </div>
        <br />
        <div>
          The <em>Custom</em> button will have its class added to the props.buttonContext by using the <code>setCustomClassname</code> hook, and the <em>Primary</em> button's CSS class will be modified by using the <code>setCustomClassname</code> hook again but matching one of the preset classes shown below.
        </div>
      </div>
      <div className={classes.BlockButtons}>
        <Button button='dark' onClick={onClick}>Click me!</Button>
      </div>
      <h2 className={classes.Header}>Showcase</h2>
      <br />
      <div className={classes.ButtonsGrid}>
        {buttonsArr.map((button, key) => {
          return (
            <Tooltip
              className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
              key={key}
              tooltip={button[0]}>
              <SyntaxHighlighter
                language='jsx'
                style={bIsLight ? prism : atomDark}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
      <br />
      <h2 className={classes.Header}>Block Buttons</h2>
      <div className={classes.BlockButtons}>
        {blockButtonsArr.map((button, key) => {
          return (
            <Tooltip
              className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
              key={key}
              tooltip={button[0]}>
              <SyntaxHighlighter
                language='jsx'
                style={bIsLight ? prism : atomDark}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
      <h2 className={classes.Header}>Logo Buttons</h2>
      <div className={classes.LogoButtonsGrid}>
        {logoButtonsArr.map((button, key) => {
          return (
            <Tooltip
              className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
              key={key}
              tooltip={button[0]}>
              <SyntaxHighlighter
                language='jsx'
                style={bIsLight ? prism : atomDark}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

ReactPNGButton.propTypes = {
  buttonContext: PropTypes.object,
  themeContext: PropTypes.object
}

export default withContexts(
  ReactPNGButton,
  {
    buttonContext: Context,
    themeContext: ThemeContext
  },
  [
    Provider // react-formalized provider
  ]
)

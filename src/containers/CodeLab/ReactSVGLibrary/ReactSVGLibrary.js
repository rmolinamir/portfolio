import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './ReactSVGLibrary.module.css'
// JSX
import { withContext } from 'with-context-react'
import { Underline, Icon } from 'react-svg-library'
import Tooltip from 'react-png-tooltip'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../../hoc/Layout/ThemeContext/ThemeContext'

const isArray = (array) => {
  return Array.isArray(array) && array.length
}

const examplesObj = {
  'Account Related': ['account-delivery', 'account-other', 'account-security', 'account-user-three', 'account-user-two', 'account-user'],
  'Address Related': ['location-pin', 'flag'],
  'Bullet Items': ['bullet-checkmark-no-bg', 'bullet-checkmark', 'bullet-star'],
  'Comunication': ['chat', 'envelope', 'phone', 'sent-envelope'],
  'Companies': ['apple', 'google-playstore', 'google', 'linkedin-one', ['linkedin-two', { size: '2.5em' }, `size: '2.5em'`]],
  'Dates Related': ['calendar', 'calendar-gradient',
    ['calendar-gradient', { gradient: ['gold', 'crimson'] },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `gradient={[
    'lightyellow', 
    'crimson']}`]
  ],
  'General Icons': ['bed', 'delivery-truck', 'more-info', 'private', 'tools', 'under-construction', 'website'],
  'Image Upload': ['single-image', 'multi-image'],
  'Interface': ['hide', 'show', 'verification-checkmark', 'warning-checkmark'],
  'Loading Animations': [
    ['loading-one', { size: '5em' }, `size='5em'`],
    ['loading-two', { size: '5em', animationFill: ['indigo', 'indianred', 'gold', 'lightblue'] },
    // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `size='5em' 
  animationFill={[
    'indigo', 
    'indianred', 
    'gold', 
    'lightblue']}`],
    ['loading-blocks', { size: '5em' }, `size='5em'`]
  ],
  'Math Related': ['minus-symbol', 'plus-symbol'],
  'Navigation': ['arrow-down', 'arrow-right', 'menu'],
  'Rating': [
    ['dollar-icon', { fill: '#007791', clipPathFill: 0.5 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='#007791' 
  clipPathFill={0.5}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `],
    ['star-icon-two', { fill: 'gold', clipPathFill: 0.66 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='gold' 
  clipPathFill={0.66}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `],
    ['star-icon', { fill: 'gold', clipPathFill: 0.75 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='gold' 
  clipPathFill={0.75}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `]
  ],
  'Shapes': ['triangle'],
  'Social Media': ['facebook-no-bg', 'facebook', 'gmail', 'instagram', 'share-one', 'share-two'],
  'Technologies': ['cpp', 'css', 'github', 'java', 'javascript', 'mongodb', 'node.js', 'react.js', 'unity-one', 'unity-two', 'unreal-engine'],
  'User Interaction': ['cancel', 'delete',
    ['like', { fill: 'indianred', stroke: 'currentColor', strokeWidth: 5 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='indianred' 
  stroke='currentColor' 
  strokeWidth={5}
  // Looks like a Legend of Zelda 
  // HP heart, doesn't it?
  `],
    ['question-mark', { fill: '#007791' }, `fill='#007791'`]
  ]
}

const randomUnderlinesArr = []
for (let i = 0; i < 10; i++) {
  randomUnderlinesArr.push(i)
}

const underlinesExamplesObj = {
  'Specific Underlines with default colors': ['cabaret', 'curious-blue', 'indigo', 'mountainmeadow', 'porsche'],
  'Specific Underlines with colors passed as props': [
    ['cabaret', { color: 'currentColor' }, `color='currentColor' `],
    ['curious-blue', { color: 'cyan' }, `color='cyan' `],
    ['indigo', { color: 'crimson' }, `color='crimson' `],
    ['mountainmeadow', { color: '#007791' }, `color='#007791'`],
    ['porsche', { color: 'gold' }, `color='gold'`]
  ]
}

const reactSVGLibrary = (props) => {
  const bIsLight = props._context && props._context.theme === 'light'
  const syntaxStyle = bIsLight ? prism : atomDark

  const examples = Object.keys(examplesObj).map(key => {
    const icons = examplesObj[key].map((example, index) => {
      /**
       * If the example is an array, then it means props are being used and has to be rendered differently.
       */
      if (isArray(example)) {
        return (
          <div className={classes.Example} key={example[0]}>
            <Tooltip
              className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
              tooltip={
                <React.Fragment>
                  <div className={classes.Icon}><Icon icon={example[0]} {...example[1]} /></div>
                  <code className={classes.Code}>{example[0]}</code>
                </React.Fragment>
              }>
              <SyntaxHighlighter language='jsx' style={syntaxStyle}>
                {/* Indented to the left due to `` brackets taking in the indentation as spaces. */}
                {`<Icon 
  icon='${example[0]}'
  ${example[2]} />`}
              </SyntaxHighlighter>
            </Tooltip>
          </div>
        )
      }
      return (
        <div key={index} className={classes.Example}>
          <Tooltip
            className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
            tooltip={
              <React.Fragment>
                <div className={classes.Icon}><Icon icon={example} /></div>
                <code className={classes.Code}>{example}</code>
              </React.Fragment>
            }>
            <SyntaxHighlighter language='jsx' style={syntaxStyle}>{`<Icon icon='${example}' />`}</SyntaxHighlighter>
          </Tooltip>
        </div>
      )
    })
    return (
      <React.Fragment key={key}>
        <h2 className={classes.ExampleHeader}>{key}</h2>
        <div className={classes.Icons}>
          {icons}
        </div>
        {key === 'Rating' && <p className={classes.Description}>
          The rating SVG icons are a bit different, they have what is known as <strong>clipPath</strong> tags, which allows the developer to partially fill the SVG paths like shown in the examples. And yes, you can control this, hover over the icons to check the code!
        </p>}
      </React.Fragment>
    )
  })

  const underlinesExamples = Object.keys(underlinesExamplesObj).map(key => {
    const underlines = underlinesExamplesObj[key].map((example, index) => {
      /**
       * If the example is an array, then it means props are being used and has to be rendered differently.
       */
      if (isArray(example)) {
        return (
          <div className={classes.Example} key={example[0]}>
            <Tooltip
              className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
              tooltip={
                <React.Fragment>
                  <div className={classes.Icon}><Underline underline={example[0]} {...example[1]} /></div>
                  <code className={classes.Code}>{example[0]}</code>
                </React.Fragment>
              }>
              <SyntaxHighlighter language='jsx' style={syntaxStyle}>
                {/* Indented to the left due to `` brackets taking in the indentation as spaces. */}
                {`<Underline 
  underline='${example[0]}'
  ${example[2]} />`}
              </SyntaxHighlighter>
            </Tooltip>
          </div>
        )
      }
      return (
        <div key={index} className={classes.Example}>
          <Tooltip
            className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
            tooltip={
              <React.Fragment>
                <div className={classes.Icon}><Underline underline={example} /></div>
                <code className={classes.Code}>{example}</code>
              </React.Fragment>
            }>
            <SyntaxHighlighter language='jsx' style={syntaxStyle}>{`<Underline underline='${example}' />`}</SyntaxHighlighter>
          </Tooltip>
        </div>
      )
    })
    return (
      <React.Fragment key={key}>
        <h2 className={classes.ExampleHeader}>{key}</h2>
        <div className={classes.Icons}>
          {underlines}
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className={classes.App}>
      <div className={classes.Header}>
        <div className={classes.Title}>
          <div>
            <h1>react-svg-library</h1>
            <Underline className={classes.Underline} />
          </div>
        </div>
        <div className={classes.Description}>
          <span style={{ marginRight: '1ch' }}>You can click or hover over any of the underlines, the icon to the right, and any of the other SVG icons to see code examples,</span>
          <Tooltip
            className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}>
            <div style={{ textAlign: 'left' }}>
              A combination of:
              <ul>
                <li><a style={{ color: 'inherit' }} href='https://www.npmjs.com/package/react-png-tooltip' target='_blank' rel='noopener noreferrer'>React PNG Tooltip</a></li>
                <li><a style={{ color: 'inherit' }} href='https://www.npmjs.com/package/react-syntax-highlighter' target='_blank' rel='noopener noreferrer'>React Syntax Highlighter</a></li>
              </ul>
              <SyntaxHighlighter language='jsx' style={syntaxStyle}>{`<Tooltip>
  <SyntaxHighlighter 
    language='jsx' 
    style={syntaxStyle}>
    Hello world!
  </SyntaxHighlighter>
</Tooltip>`}</SyntaxHighlighter>
            </div>
          </Tooltip>
          <span style={{ marginLeft: '1ch' }}> - try it out!</span>
          <p>The underlines are also SVG icons that are included in this library pack, they're randomly generated - you may refresh the page to check this feature out.</p>
          <p><strong>You may also change the theme of this page by clicking the top-left button.</strong></p>
          <p><strong>PRO-TIP:</strong> Click the icons to keep the tooltips open.</p>
        </div>
      </div>
      <h2 className={classes.IntroShowcase}>Showcase</h2>
      <br />
      {examples}
      {underlinesExamples}
      <h2 className={classes.ExampleHeader}>Randomly generated Underline</h2>
      <div className={classes.Icons}>
        {randomUnderlinesArr.map(underline => {
          return (
            <div key={underline} className={classes.Example}>
              <Tooltip
                className={bIsLight ? classes.LightTooltip : classes.DarkTooltip}
                tooltip={
                  <React.Fragment>
                    <div className={classes.Icon}><Underline /></div>
                    <code className={classes.Code}>{underline + 1}</code>
                  </React.Fragment>
                }>
                <SyntaxHighlighter language='jsx' style={syntaxStyle}>{`<Underline />`}</SyntaxHighlighter>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

reactSVGLibrary.propTypes = {
  _context: PropTypes.object
}

export default withContext(reactSVGLibrary, ThemeContext)

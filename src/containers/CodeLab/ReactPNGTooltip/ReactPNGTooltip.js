import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './ReactPNGTooltip.module.css'
// JSX
import { withContext } from 'with-context-react'
import Tooltip from 'react-png-tooltip'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../../hoc/Layout/ThemeContext/ThemeContext'

const reactPNGTooltip = (props) => {
  const bIsLight = props._context && props._context.theme === 'light'

  return (
    <>
      <h1 className={classes.Title}>react-png-tooltip</h1>
      <h2 className={classes.Header}>Showcase</h2>
      <div className={classes.App}>
        <div className={classes.Tooltips}>
          <div>
            <Tooltip
              shouldDisableClick background='indianred'
              className={classes.IndianredTooltip}>With the clicking functionality disabled!</Tooltip>
            <div className={classes.Anchor}>
              <span className={classes.Description}>This one's an indianred tooltip with <code>shouldDisableClick</code> active.</span>
            </div>
          </div>
          <div>
            <Tooltip
              shouldDisableHover background='darkblue'
              className={classes.GoldTooltip}>The icon and the windows can have different colours though!</Tooltip>
            <div className={classes.Anchor}>
              <span className={classes.Description}>This tooltip has <code>shouldDisableHover</code> active.</span>
            </div>
          </div>
          <div>
            <Tooltip>
              <img src='https://media0.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=3640f6095c64ef4962526264678e1c1c' alt='' />
              Accurate representation of me while programming this component.
              <br />
              <strong>(This is just to show you anything goes inside the tooltips)</strong>
            </Tooltip>
          </div>
        </div>

        <div className={classes.Tooltips}>
          <div>
            <Tooltip>
              <strong>This is the default color setting for the tooltips.</strong>
              <br />
              Absolutely positioned in the center. The tooltip will always render to wherever it has more space.
              If on mobile it'll tend to be centered inside the viewport.
            </Tooltip>
          </div>
          <div>
            <Tooltip
              className={classes.OrangeTooltip}
              tooltip={<button className={classes.CustomButton}>You can also use your own buttons as props.</button>}>
              And it still works as you'd expect!
            </Tooltip>
          </div>
          <div>
            <Tooltip
              className={classes.OrangeTooltip}
              background='#ff7043'>
              <iframe
                title='rickroll'
                type='text/html'
                width='100%'
                height='400px'
                src='https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1'
                frameBorder='0' />
            </Tooltip>
          </div>

          <div>
            <Tooltip
              tooltip={<img
                alt=''
                className={classes.CatTooltip}
                src='https://i.chzbgr.com/full/9112752128/h94C6655E/' />}>
              <img
                alt=''
                src='https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782' />
            </Tooltip>
          </div>
        </div>

        <div className={classes.Tooltips}>
          <div>
            <Tooltip
              background='skyblue'
              fill='white'
              className={classes.DarkTooltip}>Dark Tooltip!</Tooltip>
            <span style={{ zIndex: -1 }}>This one's a dark tooltip!</span>
          </div>
          <div>
            <Tooltip
              className={classes.OrangeTooltip}
              background='#ff7043'>
              I just don't know what other colors to use!
              <br />
              Hope this component will be of any use to you, cheers! If you find any bugs, just let me know at:
              <br />
              <strong>
                <a
                  style={{ color: 'white' }}
                  href='https://github.com/rmolinamir'
                  target='_blank'
                  rel='noopener noreferrer'>
                  https://github.com/rmolinamir
                </a>
              </strong>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={classes.Docs}>
        <div>
          <span>Try hovering or clicking the icon!</span>
          <Tooltip>
            <strong>Hello there!</strong>
            <img src='https://i.redd.it/xmlmfyyx9e611.jpg' alt='' />
          </Tooltip>
        </div>
        <br />
        <h2 className={classes.Header}>Instructions</h2>
        <ol>
          <li>
            Export the tooltip from the ‘react-png-tooltip’ and you’re good to go!
          </li>
          <li>The tooltip will close after:</li>
        </ol>
        <ul>
          <li>Clicking (or touching) the tooltip button.</li>
        </ul>
        <ol start='3'>
          <li>The tooltip will close after:</li>
        </ol>
        <ul>
          <li>Pressing the ESC key on desktop.</li>
          <li>
            Clicking (or touching) anywhere on the screen unless it’s inside the
            tooltip window.
          </li>
          <li>Clicking (or touching) the X button inside the tooltip window.</li>
          <li>Clicking (or touching) the tooltip button.</li>
        </ul>
        <h2 className={classes.Header}>Features</h2>
        <ol>
          <li>
            ESC key event listener triggered for desktop users, pressing it will
            close the modal.
          </li>
          <li>You can place it anywhere on your DOM tree.</li>
          <li>
            Can handle any type of children. It has a set width of 380px
            <strong>and a max-width of 80vw</strong>, this can’t be changed for
            the time being.
          </li>
          <li>
            <strong>Smart-Potisioning</strong> (illustration below), the tooltip
            is programmed to determine its initial rendering position and will
            make calculations depending on where it is, the viewport and its width
            to avoid overflowing outside the viewport.
          </li>
          <li>
            Tooltip window’s CSS may be changed without disrupting the
            functionality of the component (
            <strong>
              don’t change the positions, if you want something absolutely
              position then do it through an inner div
            </strong>
            ).
          </li>
          <li>
            Instead of using the default tooltip button, you can pass your own
            buttons through a prop named <strong>tooltip</strong>, usage example
            and more props information below.
          </li>
        </ol>
        <h2 className={classes.Header}>Props</h2>
        <table>
          <thead>
            <tr>
              <th>Props</th>
              <th>Functionality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>tooltip </code>
              </td>
              <td>
                Your custom JSX button that will toggle the tooltip window,
                <strong>must be JSX.</strong>
              </td>
            </tr>
            <tr>
              <td>
                <code>fill</code>
              </td>
              <td>
                The fill prop will change the default icon
                <strong>question-mark</strong> color, e.g. <code>'#484848'</code>
                or <code>'red'</code> <strong>(must be a string).</strong>
              </td>
            </tr>
            <tr>
              <td>
                <code>background</code>
              </td>
              <td>
                The background prop will change the default icon background color,
                e.g. <code>'#0000FF'</code> or <code>'blue'</code>
                <strong>(must be a string).</strong>
              </td>
            </tr>
            <tr>
              <td>
                <code>className</code>
              </td>
              <td>
                You can use your own desired CSS class for the tooltip window by
                passing said class as a prop,
                <strong>
                  however, it is highly advised to only modify background-color,
                  color, fill, border-colors, etc (aesthetics). Modifying width
                  nor any similar properties is not recommended.
                </strong>
                Usage examples below.
              </td>
            </tr>
            <tr>
              <td>
                <code>wrapperClassName</code>
              </td>
              <td>
                You may change the wrapper CSS class if you don't like the default
                one (<code>display: inline-table; position: 'relative'</code>),
                the wrapper is the outer div that wraps the whole tooltip (content
                and icon).
                <b>
                  Make sure you set position relative if you decide to change the
                  wrapperClassName, or else the positioning may be problematic.
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2 className={classes.Header}>Examples</h2>
        <h3 className={classes.Snippet}>Simple</h3>
        <SyntaxHighlighter
          language='jsx'
          style={bIsLight ? prism : atomDark}>
          {`import React from 'react'
import Tooltip from 'react-png-tooltip'

const example = () => {
  return (
    <Tooltip>PlugN'Go Tooltip</Tooltip>
  )
}


export default example`}
        </SyntaxHighlighter>
        <h3 className={classes.Snippet}>Custom Tooltip</h3>
        <SyntaxHighlighter
          language='jsx'
          style={bIsLight ? prism : atomDark}>
          {`import React from 'react'
import Tooltip from 'react-png-tooltip'

const example = () => {
  return (
    <Tooltip
      className={classes.OrangeTooltip}
      tooltip={<button className={classes.CustomButton}>Custom tooltip.</button>}>
      And it still works as you'd expect!
    </Tooltip>
  )
}


export default example`}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

reactPNGTooltip.propTypes = {
  _context: PropTypes.object
}

export default withContext(reactPNGTooltip, ThemeContext)

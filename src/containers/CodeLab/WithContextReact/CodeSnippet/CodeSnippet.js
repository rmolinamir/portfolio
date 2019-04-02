import React, { Component } from 'react'
import propTypes from 'prop-types'
// CSS
import classes from './CodeSnippet.module.css'
// JSX
import { withContext } from 'with-context-react'
import Button from 'react-png-button'
import Modal from 'react-png-modal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../../../hoc/Layout/ThemeContext/ThemeContext'

class CodeSnippet extends Component {
  static propTypes = {
    children: propTypes.any,
    example: propTypes.any,
    codeSnippet: propTypes.string,
    exampleLog: propTypes.string,
    consoleLog: propTypes.string,
    logHeader: propTypes.string,
    _context: propTypes.object
  }

  state = {
    bIsModalOpen: false
  }

  openModal = () => {
    this.setState({
      bIsModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      bIsModalOpen: false
    })
  }

  render () {
    const bIsLight = this.props._context && this.props._context.theme === 'light'
    const syntaxStyle = bIsLight ? prism : atomDark
    console.log(this.props.exampleLog, this.props)
    return (
      <div>
        <p>
          {this.props.example}
        </p>
        <Button
          style={{ padding: '6px' }}
          button='success'
          onClick={this.openModal}>Open Code Snippet</Button>
        <h3>Example:</h3>
        {this.props.children}
        <br />
        <Modal
          className={classes.ModalAesthetics}
          open={this.state.bIsModalOpen}
          closeModal={this.closeModal}
          center
          transparent>
          <SyntaxHighlighter language='jsx' style={syntaxStyle}>{this.props.codeSnippet}
          </SyntaxHighlighter>
        </Modal>
        {this.props.consoleLog ? (
          <>
            <h4>{this.props.logHeader}</h4>
            <SyntaxHighlighter language='jsx' style={syntaxStyle}>{this.props.consoleLog}></SyntaxHighlighter>
          </>
        )
          : null}
      </div>
    )
  }
}

export default withContext(CodeSnippet, ThemeContext)

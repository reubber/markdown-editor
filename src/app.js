'use strict'

import React, {Component} from 'react'
import { v4 } from 'uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'
import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.clearState = () => ({
      value: '',
      title: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem Título',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({
          isSaving: false,
          files
        })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      const {[this.state.id]: id, ...files } = this.state.files
      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidMount () {

    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
    // const files = Object.keys(localStorage)
    // this.setState({
    //   files: files.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => {
    //     return {
    //       ...acc,
    //       [fileId]: JSON.parse(localStorage.getItem(fileId))
    //     }
    //   }, {})
    // })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}

export default App

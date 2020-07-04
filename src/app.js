'use strict'

import React, {Component} from 'react'
import { v4 } from 'uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'


import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)){
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      id: v4(),
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  

    this.handleSave = (value) => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({ isSaving:false})
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.setState({ value: ''})
    }

    this.handleCreate = () => {
      console.log('criar novo markdown')
      this.setState({value: ''})
      this.textarea.focus()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }


  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  
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
      />
    )
  }
}

export default App

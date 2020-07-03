import React, { PropTypes } from 'react'
import Header from 'views/markdown-editor-header'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef, ...props}) => (

  <section className='editor'>
    <Header {...props} />
    <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />

  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor

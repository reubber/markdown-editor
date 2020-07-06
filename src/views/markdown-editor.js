import React, { PropTypes } from 'react'
import Header from 'views/markdown-editor-header'
import Files from './files'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props}) => (

  <section className='editor'>
    <Header {...props} handleChange={handleChange} />
    <Files files={files} handleOpenFile={handleOpenFile} />
    <textarea value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />
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

import React, {PropTypes} from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const Header = ({isSaving, handleChange, handleRemove, handleCreate, title}) => (
  <header className='editor-header'>
    <input type='text' value={title} onChange={handleChange('title')} placeholder='Sem titulo'/>
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>

  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header

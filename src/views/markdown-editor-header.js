import React, {PropTypes} from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const Header = ({isSaving, handleRemove, handleCreate}) => (
  <header className='editor-header'>
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
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header

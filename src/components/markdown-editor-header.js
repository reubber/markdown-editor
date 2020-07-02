import React, {PropTypes} from 'react'
import Button from 'components/button'

const Header = ({isSaving, handleRemove, handleCreate}) => (
  <header className='editor-header'>
    {isSaving !== null && (<p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  )}

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

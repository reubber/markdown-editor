import React, {PropTypes} from 'react'
import './button.css'
import css from 'strclass'

const Button = ({onClick, children, kind}) => (
  <button onClick={onClick} className={css({ [`-${kind}`]: kind }, 'button')}>
    {children}
  </button>
)

Button.defaultProps = {
  kind: ''
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button

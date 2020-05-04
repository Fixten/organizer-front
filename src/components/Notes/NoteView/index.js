import React from 'react'
import PropTypes from 'prop-types'

export function NoteView(props) {
  const { children, onClick } = props
  return (
    <wired-button
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 128,
        height: 128
      }}
      onClick={onClick}
    >
      {children}
    </wired-button>
  )
}

NoteView.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

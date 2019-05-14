import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export function NewNote(props) {
  const { onAddNote } = props
  const textAreaRef = useRef(null)

  function onSubmit() {
    const { value } = textAreaRef.current
    if (value) {
      onAddNote(value)
      textAreaRef.current.value = ''
    }
  }

  return (
    <Wrapper>
      <wired-textarea
        style={{ marginBottom: 16 }}
        placeholder={'Enter your amazing note'}
        rows={6}
        ref={textAreaRef}
      />
      <wired-button onClick={onSubmit}>Create!</wired-button>
    </Wrapper>
  )
}

NewNote.propTypes = {
  onAddNote: PropTypes.func.isRequired
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onAddNote } from '../../redux/modules/notes'

export function NewNote() {
  const textAreaRef = useRef(null)
  const dispatch = useDispatch()

  function onSubmit() {
    const { value } = textAreaRef.current
    if (value) {
      dispatch(onAddNote(value))
      textAreaRef.current.value = ''
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (textAreaRef.current.shadowRoot.host.clientHeight > 0) {
        textAreaRef.current.shadowRoot.host.requestUpdate()
        clearInterval(interval)
      }
    }, 50)
    textAreaRef.current.shadowRoot.host.requestUpdate()
  }, [])

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  width: 100%;
`

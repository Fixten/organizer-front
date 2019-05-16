import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onAddNote } from '../../redux/modules/notes'
import Modal from 'react-responsive-modal'

export function NewNote() {
  const [isOpen, setIsOpen] = useState(false)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const dispatch = useDispatch()

  function onSubmit() {
    const title = titleRef.current.value
    const text = textRef.current.value
    if (title && text) {
      dispatch(onAddNote(title, text))
      textRef.current.value = ''
      titleRef.current.value = ''
    }
  }

  const onToogleModal = () => setIsOpen(prevState => !prevState)

  return (
    <>
      <wired-button onClick={onToogleModal} style={{ padding: '0 32px' }}>
        +1
      </wired-button>
      <Modal
        open={isOpen}
        onClose={onToogleModal}
        styles={{ modal: { width: 640 } }}
      >
        <Wrapper>
          <wired-input placeholder={'Here goes the title'} ref={titleRef} />
          <wired-textarea
            style={{ marginBottom: 16, width: '100%' }}
            placeholder={'Enter your amazing note'}
            rows={6}
            ref={textRef}
          />
          <wired-button onClick={onSubmit} style={{ height: 32 }}>
            Create!
          </wired-button>
        </Wrapper>
      </Modal>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
`

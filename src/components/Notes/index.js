import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { NewNote } from './NewNote'
import { NoteView } from './NoteView'
import { onGetNotes } from '../../redux/modules/notes'

export function Notes() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onGetNotes())
  }, [dispatch])
  const notes = useSelector(state => state.notes.list)

  function onOpen() {}

  const notesContent = notes.map((item, index) => {
    const {
      title
      // text
    } = item
    return (
      <NoteView key={index} onClick={() => onOpen(index)}>
        <h4>{title}</h4>
        {/* {text.split(/\n/).map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))} */}
      </NoteView>
    )
  })
  return (
    <Wrapper>
      {notesContent}
      <NewNote />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 512px;
`

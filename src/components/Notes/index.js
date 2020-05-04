import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onGetNotes } from 'redux/modules/notes'

export function Notes() {
  const notes = useSelector(state => state.notes.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetNotes())
  }, [dispatch])

  const notesContent = notes.map((item, index) => {
    const { title, text } = item
    return (
      <div>
        <h4>{title}</h4>
        {text.split(/\n/).map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))}
      </div>
    )
  })

  return <Wrapper>{notesContent}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 512px;
`

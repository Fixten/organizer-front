import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { NewNote } from '../NewNote'

export function Notes() {
  const notes = useSelector(state => state.notes.list)
  const notesContent = notes.map((item, index) => {
    const { title, text } = item
    return (
      <wired-card key={index}>
        <h4>{title}</h4>
        {text.split(/\n/).map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))}
      </wired-card>
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

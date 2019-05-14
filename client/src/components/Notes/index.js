import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export function Notes() {
  const notes = useSelector(state => state.notes.list)
  function getContent() {
    if (notes.length)
      return (
        <>
          {notes.map((item, index) => (
            <wired-card key={index}>
              {item.split(/\n/).map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </wired-card>
          ))}
        </>
      )
    else return <wired-card>No notes</wired-card>
  }
  return <Wrapper>{getContent()}</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
`

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onGetNotes } from 'store/reducers/notes'
import { useTypedSelector } from 'hooks/useTypedSelector'

export const Notes: React.FC = () => {
  const notes = useTypedSelector((state) => state.notes.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetNotes())
  }, [dispatch])

  const notesContent = notes.map<JSX.Element>((item, index) => {
    const { title, text } = item
    return (
      <div key={index}>
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

import React from 'react'
import { useSelector } from 'react-redux'

export function Notes(props) {
  const notes = useSelector(state => state.notes.list)
  if (notes.length)
    return (
      <>
        {props.notes.map((item, index) => (
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

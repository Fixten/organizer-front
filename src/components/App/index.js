import React from 'react'
import styled from 'styled-components'
import { Logo } from 'components/Logo'
import { Notes } from 'components/Notes'

export function App() {
  return (
    <Wrapper>
      <Notes />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

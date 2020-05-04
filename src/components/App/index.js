import React from 'react'
import styled from 'styled-components'
import { Logo } from '../Logo'
// import { Notes } from '../Notes'

export function App() {
  return (
    <Wrapper>
      <Logo />
      {/* <Notes /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

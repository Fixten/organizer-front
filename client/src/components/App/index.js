import React from 'react'
import styled from 'styled-components'
import { Tabs } from '../Tabs'
import { Logo } from '../Logo'

export function App() {
  return (
    <>
      <Wrapper>
        <Logo />
        <Tabs />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

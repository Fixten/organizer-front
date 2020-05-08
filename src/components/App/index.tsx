import React from 'react'
import styled from 'styled-components'
import { Notes } from '../Notes'

export const App: React.FC = () => {
  return (
    <Wrapper>
      test
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

import React from 'react'
import styled from 'styled-components'

export function Logo() {
  return (
    <Wrapper>
      <Heading>Organizer</Heading>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position relative;
  
`

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: #fff587;
`

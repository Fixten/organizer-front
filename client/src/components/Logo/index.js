import React from 'react'
import ReactRough, { Rectangle } from 'react-rough'
import styled from 'styled-components'

export function Logo() {
  return (
    <Wrapper>
      <ReactRough width={320} height={96}>
        <Rectangle points={[0, 0, 320, 96]} fill="#A3A1A8" fillWeight={4} />
      </ReactRough>
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

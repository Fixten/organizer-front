import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { List } from 'components/Notes/List';
import { New } from 'components/Notes/New';

export function Notes(): ReactElement {
  return (
    <Wrapper>
      <Typography variant="h2">Notes</Typography>
      <New />
      <List />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 512px;
`;

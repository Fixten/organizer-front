import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { New } from 'components/Checklist/New';
import { List } from 'components/Checklist/List';

export function Checklist(): ReactElement {
  return (
    <div>
      <Typography variant="h2">Checklist</Typography>
      <New />
      <List />
    </div>
  );
}

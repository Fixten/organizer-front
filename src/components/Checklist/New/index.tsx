import React, { ReactElement, useState } from 'react';
import { Button } from '@material-ui/core';
import { Form } from './Form';

export function New(): ReactElement {
  const [isForm, setIsForm] = useState<boolean>(false);

  function onClose(): void {
    setIsForm(false);
  }

  return isForm ? (
    <Form onClose={onClose} />
  ) : (
    <Button onClick={() => setIsForm(true)}>Add</Button>
  );
}

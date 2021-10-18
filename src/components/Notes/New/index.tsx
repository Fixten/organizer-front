import React, { useState, ReactElement } from 'react';
import { Form } from 'components/Notes/New/Form';

export function New(): ReactElement {
  const [isForm, setIsForm] = useState<boolean>(false);

  function onClose(): void {
    setIsForm(false);
  }

  return isForm ? (
    <Form onClose={onClose} />
  ) : (
    <button onClick={() => setIsForm(true)}>+1</button>
  );
}

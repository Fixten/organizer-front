import React, { useState, ReactElement } from 'react';
import { Form } from 'components/Notes/New/Form';

export function New(): ReactElement {
  const [isForm, setIsForm] = useState<boolean>(false);

  return isForm ? (
    <Form onClose={() => setIsForm(false)} />
  ) : (
    <button onClick={() => setIsForm(true)}>+1</button>
  );
}

import React, { ReactElement, useState } from 'react';
import { ThunkDispatch } from 'store/reducers';
import { useThunkDispatch } from 'hooks/useThunkDispatch';
import { onAddCheckBox } from 'store/reducers/checklist';

interface Props {
  onClose: () => void;
}

export function submit(
  dispatch: ThunkDispatch,
  onClose: Props['onClose'],
  newItem: string
): void {
  dispatch(onAddCheckBox(newItem));
}

export function Form(props: Props): ReactElement {
  const { onClose } = props;
  const [value] = useState<string>('');
  const thunkDispatch = useThunkDispatch();

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    submit(thunkDispatch, onClose, value);
  }

  return <form onSubmit={onSubmit}></form>;
}

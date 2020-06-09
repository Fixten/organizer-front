import React, { useState, ReactElement } from 'react';
import { onAddNote, OnAddNoteData } from 'store/reducers/notes';
import { useThunkDispatch } from 'hooks/useThunkDispatch';
import { ThunkDispatch } from 'store/reducers';
import { TextField } from '@material-ui/core';

interface Props {
  onClose: () => void;
}

/**
 * Submits form. If data fields filled, will create new Note and close the form
 * @param data Note fields
 * @param dispatch Redux dispatch
 * @param onClose Close callback
 */
export function submit(
  props: Pick<Props, 'onClose'>,
  data: OnAddNoteData,
  dispatch: ThunkDispatch
): void {
  const { onClose } = props;
  const { title, text } = data;
  if (title && text) {
    dispatch(onAddNote({ title, text }));
    onClose();
  }
}

export function Form(props: Props): ReactElement {
  const { onClose } = props;
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const dispatch = useThunkDispatch();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit({ onClose }, { title, text }, dispatch);
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Name"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
      <TextField
        label="Content"
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        multiline
      />
      <button type="submit">Create</button>
    </form>
  );
}

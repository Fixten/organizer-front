import React, { useState, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { onAddNote } from 'store/reducers/notes';

interface Props {
  onClose: () => void;
}

export function Form(props: Props): ReactElement {
  const { onClose } = props;
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  function onSubmit(): void {
    if (title && text) {
      dispatch(onAddNote(title, text));
      onClose();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
      <textarea
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      >
        Enter note
      </textarea>
      <button type="submit">Create</button>
    </form>
  );
}

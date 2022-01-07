import React, { useState, ReactElement } from "react";
import { TextField } from "@mui/material";

interface Props {
  onClose: () => void;
}

export function Form(props: Props): ReactElement {
  // const { onClose } = props;
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

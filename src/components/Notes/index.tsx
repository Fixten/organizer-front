import styled from "styled-components";

import { useNotes } from "hooks/useNotes";

import { New } from "./New";
import { NotesList } from "./NotesList";
import { Typography } from "@mui/material";

export function Notes() {
  const [notes] = useNotes();

  return (
    <Wrapper>
      <Typography variant="h2">Notes</Typography>
      <New />
      <NotesList notes={notes} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 512px;
`;

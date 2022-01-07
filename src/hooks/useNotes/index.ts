import { List } from "immutable";
import { Note } from "models/Note";
import { useState } from "react";

export function useNotes(): [List<Note>, (newList: List<Note>) => void] {
  const [stateNotes, setStateNotes] = useState<List<Note>>(List());

  return [stateNotes, setStateNotes];
}

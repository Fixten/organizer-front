import { List } from "immutable";

import { Note } from "models/Note";

type Props = {
  notes: List<Note>;
};

export function NotesList(props: Props) {
  const notesContent = props.notes.map<JSX.Element>((item, index) => {
    const { title, text } = item;
    return (
      <div key={index}>
        <h4>{title}</h4>
        {text.split(/\n/).map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))}
      </div>
    );
  });
  return <div>{notesContent}</div>;
}

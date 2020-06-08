import React, { useEffect, ReactElement } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { onGetNotes } from 'store/reducers/notes';

export function List(): ReactElement {
  const notes = useTypedSelector((state) => state.notes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetNotes());
  }, [dispatch]);

  const notesContent = notes.map<JSX.Element>((item, index) => {
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

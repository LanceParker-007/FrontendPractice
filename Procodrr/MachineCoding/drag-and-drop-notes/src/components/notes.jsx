import React, { useEffect } from "react";
import Note from "./note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  const determineNewPosition = () => {};

  useEffect(() => {
    const savedNotes = [];
    const updatedNotes = notes.map((note) => {
      const savedNote = null;
      if (savedNote) {
        return {};
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return <Note key={note.id} content={note.text} />;
      })}
    </div>
  );
};

export default Notes;

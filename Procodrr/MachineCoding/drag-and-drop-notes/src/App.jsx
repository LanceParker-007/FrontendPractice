import React, { useState } from "react";
import "./App.css";
import Notes from "./components/notes";

const notesData = [
  {
    id: 1,
    text: "Notes 1 description, dummy data!",
  },
  {
    id: 2,
    text: "Notes 2 description, dummy data!",
  },
];

const App = () => {
  const [notes, setNotes] = useState(notesData);

  // Set draggable attribute to true and set onDragStart atrribute that is a function to tell What to drag when dragging the element
  const drag = (e) => {
    e.target.style.scale = 0.9;
    e.dataTransfer.setData("text", e.target.id);
  };

  // Allow the drop event on the element, by default we are not allowed to drop elements on each other we have to preventDefault
  const allowDropOnOuterDiv = (e) => {
    e.preventDefault();
  };

  // What to do when dropping the dragged element on to the element on which we allowed droppping
  // My method
  // const drop = (e) => {
  //   e.preventDefault();
  //   const draggedData = e.dataTransfer.getData("text");
  //   const draggedElement = document.getElementById(draggedData);
  //   draggedElement.style.scale = 1;
  //   const elementAlreadyPresent = document.elementFromPoint(
  //     e.clientX,
  //     e.clientY
  //   );
  //   if (elementAlreadyPresent.classList.contains("innerDiv")) {
  //     return;
  //   }
  //   // if (elementAlreadyPresent.classList.)
  //   if (e.clientY > 50 && e.clientY < window.innerHeight - 50) {
  //     draggedElement.style.top = `${e.clientY - 50}px`;
  //   }
  //   if (e.clientX > 50 && e.clientX < window.innerWidth - 50) {
  //     draggedElement.style.left = `${e.clientX - 50}px`;
  //   }
  // };

  // Chagtgpt
  const drop = (e) => {
    e.preventDefault();
    const draggedData = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(draggedData);
    draggedElement.style.transform = "scale(1)";

    const outerDiv = e.target.closest(".outerDiv");
    console.log(outerDiv);
    const rect = outerDiv.getBoundingClientRect();
    console.log(rect);

    const offsetX = e.clientX - rect.left - draggedElement.clientWidth / 2;
    const offsetY = e.clientY - rect.top - draggedElement.clientHeight / 2;

    let left = Math.max(
      0,
      Math.min(offsetX, rect.width - draggedElement.clientWidth)
    );
    let top = Math.max(
      0,
      Math.min(offsetY, rect.height - draggedElement.clientHeight)
    );

    draggedElement.style.left = `${left}px`;
    draggedElement.style.top = `${top}px`;
  };

  // return <Notes notes={notes} setNotes={setNotes} />;
  return (
    <div className="outerDiv" onDragOver={allowDropOnOuterDiv} onDrop={drop}>
      <div id="id1" className="innerDiv" draggable={true} onDragStart={drag}>
        div 1
      </div>
      <div id="id2" className="innerDiv" draggable={true} onDragStart={drag}>
        div 2
      </div>
      <div id="id3" className="innerDiv" draggable={true} onDragStart={drag}>
        div 3
      </div>
    </div>
  );
};

export default App;

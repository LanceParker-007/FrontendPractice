import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`openModalBtnDiv + ${showModal ? "blur" : ""}`}>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>
      </div>

      {showModal ? (
        <Modal setShowModal={setShowModal}>
          <div>
            <h1>Modal Content Heading</h1>
            <div>Modal content</div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;

import { useState, useRef, useEffect } from "react";
import Dialog from "./components/dialog";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal} data-open-modal>
        Open
      </button>

      {isModalOpen && (
        <Dialog isOpen={isModalOpen} onClose={handleCloseModal} />
      )}

    </div>
  );
}

export default App;

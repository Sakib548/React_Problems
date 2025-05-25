import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MdCancel } from "react-icons/md";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowModal(!showModal);
    };
    if (showModal) {
      document.addEventListener("keydown", handleKey);
    }

    return () => document.removeEventListener("keypress", handleKey);
  }, [showModal]);

  return (
    <section>
      <button onClick={() => handleToggle()}>Toggle</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Modal Header</h2>
              <span className="cancel-icon" onClick={() => handleToggle()}>
                <MdCancel />
              </span>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam exercitationem nobis neque. Recusandae vitae ipsa,
              accusamus, nulla culpa dicta quis atque doloremque fuga natus
              animi.
            </div>

            <div className="modal-footer">
              <button onClick={() => handleToggle()}>I accept</button>
              <button onClick={() => handleToggle()}>Decline</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;

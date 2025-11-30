import { useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div
            className="modal-backdrop"
            onClick={onClose}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById("modal-root") // A designated DOM element for modals
    );
};

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <h1>Main Application Content</h1>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <h2>Modal Title</h2>
                <p>This is some content inside the modal.</p>
            </Modal>
        </>
    );
}

export default App;

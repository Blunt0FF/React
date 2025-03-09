import { useState, useRef, useEffect } from "react";

export default function Modal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  function closeModal() {
    if (modalRef.current) {
      modalRef.current.classList.add("closing");
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  }

  function handleOverlayClick() {
    closeModal();
  }

  function handleModalClick(event) {
    event.stopPropagation();
  }

  useEffect(() => {
    if (modalRef.current && isVisible) {
      modalRef.current.classList.add("opening");
    }
  }, [isVisible]);

  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Show modal
      </button>
      {isVisible && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div ref={modalRef} className="modal" onClick={handleModalClick}>
            {children}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

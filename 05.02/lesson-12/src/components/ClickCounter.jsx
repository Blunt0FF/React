import { useState, useRef, useEffect } from "react";

export default function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);
  const firstNameInputRef = useRef(null);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      if (buttonRef.current !== null) {
        console.log(buttonRef);
        buttonRef.current.style.backgroundColor = "black";
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (firstNameInputRef.current !== null) {
      firstNameInputRef.current.focus();
    }

    // const keyEvent = window.addEventListener("keydown", (event) => {
    //   if (event.key === "f") {
    //     firstNameInputRef.current.focus();
    //   }
    // });

    // return () => {
    //   window.removeEventListener("keydown", keyEvent);
    // };
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    if (firstNameInputRef.current !== null) {
      firstNameInputRef.current.focus();
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Click Counter</h1>
      <p>Count: {clickCount}</p>
      <button ref={buttonRef} onClick={handleClick}>
        +
      </button>
      <label>
        First Name
        <input ref={firstNameInputRef} type="text" />
      </label>
      <label>
        Last Name
        <input type="text" />
      </label>
    </form>
  );
}

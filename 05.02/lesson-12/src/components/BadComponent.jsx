import React, { useEffect } from "react";

// Так не делать! Лучше использовать useRef
export default function BadComponent() {
  function handleClick() {
    console.log("Bad button clicked");
  }

  useEffect(() => {
    const badButton = document.querySelector(".bad-button");
    badButton.addEventListener("click", handleClick);

    return () => {
      badButton.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <p>I'm a bad, bad button</p>
      <button className="bad-button">Click me</button>
    </div>
  );
}

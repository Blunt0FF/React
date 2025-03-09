import { useRef } from "react";

export default function ScrollBox() {
  const scrollRef = useRef(null);

  function handleScrollToTop() {
    const element = scrollRef.current;

    if (element) {
      element.scrollTop = 0;
    }
  }

  function handleScrollToBottom() {
    const element = scrollRef.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <div
        ref={scrollRef}
        style={{
          height: "250px",
          overflowX: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div>
          <h2>Heading level 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            maxime in, explicabo aliquam quidem dignissimos commodi voluptatum
            culpa atque quae porro similique doloremque dolor nulla magnam
            corrupti architecto fugit. Repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            maxime in, explicabo aliquam quidem dignissimos commodi voluptatum
            culpa atque quae porro similique doloremque dolor nulla magnam
            corrupti architecto fugit. Repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            maxime in, explicabo aliquam quidem dignissimos commodi voluptatum
            culpa atque quae porro similique doloremque dolor nulla magnam
            corrupti architecto fugit. Repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            maxime in, explicabo aliquam quidem dignissimos commodi voluptatum
            culpa atque quae porro similique doloremque dolor nulla magnam
            corrupti architecto fugit. Repellat.
          </p>
        </div>
      </div>
    </div>
  );
}

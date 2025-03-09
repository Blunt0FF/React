import { useEffect } from "react";

export default function VisibilityChange() {
  function handleVisibilityChange() {
    console.log("Tab visibility changed");
  }

  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return <div>VisibilityChange</div>;
}

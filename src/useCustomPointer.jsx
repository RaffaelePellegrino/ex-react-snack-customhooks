import { Component, useEffect, useState } from "react";

export default function useCustomPointer(Component) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {Component}
    </div>
  );
}

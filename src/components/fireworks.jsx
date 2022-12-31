import { Fireworks } from "@fireworks-js/react";

export default function Firework() {
  return (
    <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100,
        },
      }}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "transparent",
      }}
    />
  );
}

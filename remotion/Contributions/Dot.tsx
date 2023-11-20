import React from "react";

export type ContributionDotType = {
  col: number;
  row: number;
  x: number;
  y: number;
  opacity: number;
  color: string;
  borderRadius: string | number;
  width: number;
  height: number;
  glow: number;
};

export const ContributionDot: React.FC<{
  dot: ContributionDotType;
}> = ({ dot: p }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: p.x,
        top: p.y,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: p.height + p.glow,
        width: p.width + p.glow,
        opacity: p.opacity,
        borderRadius: "50%",
        background:
          p.glow > 0
            ? "radial-gradient(circle at center, #e0ff5e 0, #3b6dd1 30%, #0086d4 50%, #021d57 65%, #01194a 100%)"
            : undefined,
      }}
    >
      <div
        style={{
          height: p.height,
          width: p.width,
          borderRadius: p.borderRadius,
          background: p.color,
        }}
      />
    </div>
  );
};
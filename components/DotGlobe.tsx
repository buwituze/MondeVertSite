"use client";

import { useEffect, useRef } from "react";

const canvasWidth = 500;
const canvasHeight = 500;
const dotColor = "#00bf63";
const dotSize = 3;
const spacing = 12;

// Simple dot map centered around Africa (expand as needed)
const earthDotMap = [
  [14, 10],
  [15, 10],
  [16, 10],
  [13, 11],
  [14, 11],
  [15, 11],
  [16, 11],
  [17, 11],
  [12, 12],
  [13, 12],
  [14, 12],
  [15, 12],
  [16, 12],
  [17, 12],
  [12, 13],
  [13, 13],
  [14, 13],
  [15, 13],
  [16, 13],
  [17, 13],
  [13, 14],
  [14, 14],
  [15, 14],
  [16, 14],
];

const DotVision = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Earth dots
    earthDotMap.forEach(([x, y]) => {
      const px = x * spacing + 100;
      const py = y * spacing + 100;

      ctx.beginPath();
      ctx.arc(px, py, dotSize, 0, 2 * Math.PI);
      ctx.fillStyle = dotColor;
      ctx.fill();
    });

    // Art swirl (semi-transparent)
    ctx.beginPath();
    ctx.arc(250, 250, 120, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(255, 0, 100, 0.2)";
    ctx.lineWidth = 20;
    ctx.stroke();

    // Culture border (dashed dot rectangles)
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#888";
    ctx.strokeRect(20, 20, canvasWidth - 40, canvasHeight - 40);

    // Technology lines
    ctx.setLineDash([]);
    ctx.strokeStyle = "#00bf63";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < earthDotMap.length - 1; i++) {
      const [x1, y1] = earthDotMap[i];
      const [x2, y2] = earthDotMap[i + 1];
      ctx.beginPath();
      ctx.moveTo(x1 * spacing + 100, y1 * spacing + 100);
      ctx.lineTo(x2 * spacing + 100, y2 * spacing + 100);
      ctx.stroke();
    }

    // Label
    ctx.fillStyle = "#333";
    ctx.font = "16px sans-serif";
    ctx.fillText(
      "Art. Culture. Technology. Sustainable Future.",
      50,
      canvasHeight - 30
    );
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className="rounded-md shadow-lg bg-white"
    />
  );
};

export default DotVision;

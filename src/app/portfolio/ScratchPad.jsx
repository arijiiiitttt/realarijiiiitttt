import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const ScratchPad = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 500,
      backgroundColor: "#fff",
    });

    // **Pen Tool**
    const setPen = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = "black";
      canvas.freeDrawingBrush.width = 5;
    };

    // **Eraser Tool**
    const setEraser = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = "#fff"; // Erases by painting over
      canvas.freeDrawingBrush.width = 20;
    };

    // **Add Image**
    const addImage = (url) => {
      fabric.Image.fromURL(url, (img) => {
        img.scale(0.5);
        canvas.add(img);
      });
    };

    // **Clear Canvas**
    const clearCanvas = () => {
      canvas.clear();
      canvas.backgroundColor = "#fff";
      canvas.renderAll();
    };

    // Attach to window for easy testing
    window.setPen = setPen;
    window.setEraser = setEraser;
    window.addImage = addImage;
    window.clearCanvas = clearCanvas;

    return () => canvas.dispose();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas ref={canvasRef} className="border border-gray-400" />

      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={() => window.setPen()}>
          Pen
        </button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={() => window.setEraser()}>
          Eraser
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={() => window.addImage("https://via.placeholder.com/150")}
        >
          Add Image
        </button>
        <button className="bg-gray-500 text-white px-4 py-2" onClick={() => window.clearCanvas()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default ScratchPad;
"use client";

import { useEffect, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

export default function Home() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const runDetection = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Camera not found");
      return;
    }

    const webCampromise = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: "user" },
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        return new Promise((resolve) => {
          videoRef.current.onloadedmetadata = () => {
            resolve();
          };
        });
      });

    const modelPromise = cocoSsd.load();

    Promise.all([modelPromise, webCampromise]).then((values) => {
      const model = values[0];
      detectFrame(videoRef.current, model);
    });
  };

  const detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      renderPredictions(predictions);
      requestAnimationFrame(() => {
        detectFrame(video, model);
      });
    });
  };

  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = "16px sans-serif";
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;

      ctx.strokeStyle = "#22d3ee";
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#22d3ee";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(ctx.font, 10);

      ctx.fillRect(x, y, textWidth + 6, textHeight + 6);

      ctx.fillStyle = "#000";
      ctx.fillText(prediction.class, x + 3, y + 3);
    });
  };

  useEffect(() => {
    runDetection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-white mb-6 tracking-wide">
        Real-Time Object Detection
      </h1>

      {/* Camera Container */}
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4">

        <video
          className="rounded-xl border-4 border-indigo-400 shadow-lg"
          width={500}
          height={350}
          autoPlay
          ref={videoRef}
        />

        <canvas
          className="absolute top-4 left-4 rounded-xl"
          width={500}
          height={350}
          ref={canvasRef}
        />

      </div>

      {/* Info Panel */}
      <div className="mt-8 max-w-xl text-center text-white/80 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">

        <p className="font-semibold text-lg mb-2">
          AI Camera Detection Active
        </p>

        <p className="text-sm">
          The camera is currently running real-time object detection using a
          TensorFlow.js model. Detected objects will appear with bounding boxes
          on the video feed.
        </p>

        <p className="text-sm mt-3 text-indigo-300">
          Note: If you want to use the image classification feature instead of
          the camera detector, manually navigate to the{" "}
          <span className="font-bold">/recog</span> route.
        </p>

      </div>

    </div>
  );
}
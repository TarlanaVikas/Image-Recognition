"use client";

import React, { useState, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

function Recognize() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const imageRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setImageUrl(image);
      setPredictions([]);
    }
  };

  const handleClassify = async () => {
    try {
      setLoading(true);

      const model = await mobilenet.load();
      const results = await model.classify(imageRef.current);

      setPredictions(results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-6">

      <div className="w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6">

        <h1 className="text-3xl font-bold text-white tracking-wide">
          AI Image Recognition
        </h1>

        <label className="w-full">
          <div className="border-2 border-dashed border-indigo-400 hover:border-indigo-300 transition rounded-xl p-6 text-center cursor-pointer text-white font-semibold text-lg bg-white/5 hover:bg-white/10">
            Upload an Image
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>

        {imageUrl && (
          <div className="flex flex-col items-center gap-5 w-full">

            <img
              ref={imageRef}
              src={imageUrl}
              alt="Uploaded"
              className="w-[320px] rounded-xl shadow-lg border border-white/20"
            />

            <button
              onClick={handleClassify}
              className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-md"
            >
              {loading ? "Analyzing Image..." : "Classify Image"}
            </button>
          </div>
        )}

        {predictions.length > 0 && (
          <div className="w-full flex flex-col gap-4 mt-4">

            <h2 className="text-xl font-semibold text-white">
              Predictions
            </h2>

            {predictions.map((prediction, index) => {
              const confidence = (prediction.probability * 100).toFixed(2);

              return (
                <div
                  key={index}
                  className="bg-white/90 rounded-xl p-4 shadow-md"
                >
                  <div className="flex justify-between font-semibold text-gray-800">
                    <span>{prediction.className}</span>
                    <span>{confidence}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div
                      className="bg-indigo-600 h-3 rounded-full transition-all"
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Recognize;
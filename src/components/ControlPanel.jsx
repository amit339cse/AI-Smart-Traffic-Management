import { useState } from "react";

export default function ControlPanel({ setSpike }) {
  const [intensity, setIntensity] = useState(50);

  return (
    <div className="bg-gradient-to-br from-[#020617] to-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-2xl">

      <h3 className="text-white mb-4 font-semibold">
        🎛️ Traffic Control Panel
      </h3>

      <label className="text-sm text-gray-400">
        Traffic Intensity: {intensity}
      </label>

      <input
        type="range"
        min="0"
        max="100"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
        className="w-full mt-2"
      />

      <button
        onClick={() => setSpike()}
        className="mt-4 w-full bg-gradient-to-r from-red-500 to-pink-500 py-2 rounded-xl hover:scale-105 transition"
      >
        Simulate Traffic Spike
      </button>

    </div>
  );
}
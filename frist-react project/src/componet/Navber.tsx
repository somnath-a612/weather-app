import { useState } from "react";

const messages = [
  "Wait… are you sure? 🥺",
  "Please reconsider 🙏",
  "Think about it again…",
  "Wrong button! 😤",
  "The button is running away!",
  "Last chance! 💕",
];

export default function Navbar() {
  const [page, setPage] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  function runAway() {
    const rx = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.floor(Math.random() * 80));
    const ry = (Math.random() > 0.5 ? 1 : -1) * (20 + Math.floor(Math.random() * 40));
    setNoPos((prev) => ({ x: prev.x + rx, y: prev.y + ry }));
    setNoCount((c) => c + 1);
  }

  if (accepted) {
    return (
      <div className="h-screen bg-pink-500 flex flex-col items-center justify-center gap-4">
        <div className="text-6xl animate-bounce">🎉</div>
        <h1 className="text-3xl font-bold text-white">Yayyy!! It's a date! 🎉</h1>
        <p className="text-pink-100">Can't wait!! 💕</p>
      </div>
    );
  }

  // Page 0 — initial question
  if (page === 0) {
    return (
      <div className="h-screen bg-pink-500 flex flex-col items-center justify-center gap-6">
        <div className="text-6xl animate-bounce">🌸</div>
        <h1 className="text-2xl font-bold text-white">Sheel, you go a date?</h1>
        <p className="text-pink-100 text-sm">Answer carefully 👀</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setAccepted(true)}
            className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Yes 💖
          </button>
          <button
            onClick={() => setPage(1)}
            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-pink-400 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    );
  }

  // Page 1 — second chance, same content
  if (page === 1) {
    return (
      <div className="h-screen bg-pink-500 flex flex-col items-center justify-center gap-6">
        <div className="text-6xl animate-bounce">🌸</div>
        <h1 className="text-3xl font-bold text-white">Sheel, you go a date?</h1>
        <p className="text-pink-100 text-sm">Are you really sure? 🥺</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setAccepted(true)}
            className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Yes 💖
          </button>
          <button
            onClick={() => setPage(2)}
            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-pink-400 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    );
  }

  // Page 2 — No button runs away
  return (
    <div className="h-screen bg-pink-500 flex flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="text-6xl animate-bounce">🌸</div>
      <h1 className="text-3xl font-bold text-white">Sheel, you go a date?</h1>
      <p className="text-pink-100 text-sm">
        {noCount === 0
          ? "Last chance… 👀"
          : messages[Math.min(noCount - 1, messages.length - 1)]}
      </p>
      <div className="flex gap-4 items-center relative">
        <button
          onClick={() => setAccepted(true)}
          className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Yes 💖
        </button>
        <button
          onMouseEnter={runAway}
          onTouchStart={runAway}
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            transition: "transform 0.2s ease",
          }}
          className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-pink-400 transition-colors"
        >
          No
        </button>
      </div>
    </div>
  );
}
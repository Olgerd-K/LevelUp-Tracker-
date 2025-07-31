import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LevelProgress() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [prevLevel, setPrevLevel] = useState(1);

  const handleAdd25 = () => {
    updateXP(25);
  };

  const handleRemove25 = () => {
    updateXP(-25);
  };

  const updateXP = (value) => {
    let newXp = xp + value;
    let newLevel = level;

    while (newXp >= newLevel * 100) {
      newLevel++;
    }

    while (newLevel > 1 && newXp < (newLevel - 1) * 100) {
      newLevel--;
    }

    setPrevLevel(prev => prev !== newLevel ? prev : prevLevel);
    setLevel(newLevel);
    setXp(newXp < 0 ? 0 : newXp);
  };

  const totalXPForCurrentLevel = (level - 1) * 100;
  const totalXPForNextLevel = level * 100;
  const xpCurrentLevel = xp - totalXPForCurrentLevel;
  const xpToNext = totalXPForNextLevel - xp;
  const progressPercent = (xpCurrentLevel / 100) * 100;

  const getStars = (level) => {
    if (level >= 10) return '⭐⭐⭐';
    if (level >= 5) return '⭐⭐';
    return '⭐';
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/20250730_1945_Фішки на заході сонця_remix_01k1e3g8phefztv2j03efwvqzy.png')",
      }}
    >
      <div className="w-full max-w-lg bg-gray-900 bg-opacity-80 border border-gray-400 rounded-xl p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">VICTORY</h1>
        <p className="text-lg text-center mb-2 text-white">Total XP: {xp}</p>
        <div className="text-3xl text-center mb-4 text-white">{getStars(level)}</div>

        <div className="w-full">
          <div className="flex justify-between mb-1 text-sm font-bold text-white">
            <span>Level {level} ({xpCurrentLevel} XP)</span>
            <span>Level {level + 1} (needs {totalXPForNextLevel} XP)</span>
          </div>

          <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden mb-2">
            <motion.div
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="h-full bg-yellow-400"
            />
          </div>

          <p className="text-sm text-center text-white mb-4">
            {xpToNext} XP left to reach Level {level + 1}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleAdd25}
              className="px-4 py-2 bg-green-500 text-white rounded font-bold hover:bg-green-400 transition-colors"
            >
              +25 XP
            </button>
            <button
              onClick={handleRemove25}
              className="px-4 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-400 transition-colors border-2 border-blue-400"
            >
              -25 XP
            </button>
          </div>
        </div>

        <AnimatePresence>
          {prevLevel !== level && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-green-400 font-bold text-xl text-center"
            >
              New Level: {level}!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 
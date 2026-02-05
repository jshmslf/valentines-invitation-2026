import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Certificate } from './Certificate';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState('');
  const [answered, setAnswered] = useState(false);
  const [panic, setPanic] = useState(false);

  const yesRef = useRef<HTMLButtonElement>(null);

  const girlfriendName = 'Justine Louise Pespes';

  const messages = [
    "Weh?! Hindi nga?!? 🥺",
    "Weh?! Hindi nga?!? 🥺",
    "SAET LODSSSS💔",
    "Plz plzzz plzz! Sagot ko! 😢",
    "Give me one more chance! 🙏",
    "My hearttttttt! 💔",
    "Please? Pretty please? 🥺",
    "ME, habang pinipindot mo ang No",
    "Pinipindot nya talaga yung NO ohhh🫵🏻😭",
    "LUH HINDI NA BIRO YAN😭🫵🏻🫵🏻",
    "lAST MO NA TO HUHUHUHUHU 😤"
  ];

  const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2c1OGFoMTVxN3B6bG9kcTk5OXZodzI5azdhODlvaGd3bjZicHJpYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1ADMaHDgtItxKulUJw/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJpbXFvcHNqaGZpM2tjcXllbG1peXJuMGRjMnR5ODJnN284enpvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dTTt9Oeomo02KlfZAA/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJpbXFvcHNqaGZpM2tjcXllbG1peXJuMGRjMnR5ODJnN284enpvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10hzvF9FTulLxK/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJpbXFvcHNqaGZpM2tjcXllbG1peXJuMGRjMnR5ODJnN284enpvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2WxWfiavndgcM/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJpbXFvcHNqaGZpM2tjcXllbG1peXJuMGRjMnR5ODJnN284enpvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d62ID9ANzAZKvBLh4A/giphy.gif"
  ];

  const defaultGif = "https://media3.giphy.com/media/KEf7gXqvQ8B3SWnUid/giphy.gif";

  useEffect(() => {
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach((heart, index) => {
      const delay = index * 0.4;
      const duration = 3 + Math.random() * 2;
      (heart as HTMLElement).style.animationDelay = `${delay}s`;
      (heart as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, []);

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    // clamp YES growth
    setYesButtonSize(prev => Math.max(prev + 0.25, 0.52));

    setShowMessage(
      newCount < messages.length ? messages[newCount] : "UKIIII👍🏻😤"
    );

    // 🫣 panic shake
    setPanic(true);
    setTimeout(() => setPanic(false), 250);

    const button = e.currentTarget as HTMLElement;
    const container = button.parentElement;

    if (container && yesRef.current) {
      const containerRect = container.getBoundingClientRect();
      const yesRect = yesRef.current.getBoundingClientRect();

      const yesX = yesRect.left - containerRect.left + yesRect.width / 2;
      const yesY = yesRect.top - containerRect.top + yesRect.height / 2;

      const maxX = container.clientWidth - button.clientWidth - 20;
      const maxY = container.clientHeight - button.clientHeight - 20;

      let randomX = Math.random() * Math.max(0, maxX);
      let randomY = Math.random() * Math.max(0, maxY);

      // 🧲 magnet pull
      const magnetStrength = Math.min(0.15 + noClickCount * 0.05, 0.6);

      randomX += (yesX - randomX) * magnetStrength;
      randomY += (yesY - randomY) * magnetStrength;

      setNoButtonPosition({ x: randomX, y: randomY });
    }
  };

  const handleYesClick = () => setAnswered(true);

  // choose GIF
  const currentGif =
    noClickCount === 0 ? defaultGif : gifs[(noClickCount - 1) % gifs.length];

  if (answered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-400 flex items-center justify-center relative overflow-hidden p-4">
        <div className="floating-hearts">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="floating-heart text-red-500 opacity-60"
              fill="currentColor"
              size={30}
            />
          ))}
        </div>

        <div className="text-center z-10 w-full max-w-4xl mt-12 animate-fade-in">
          <div className="text-8xl mb-8 animate-bounce">🎉💕🎉</div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Yaaaay!!!
          </h1>

          <p className="text-xl md:text-3xl text-white mb-10 drop-shadow-md">
            Hindi mo talaga ako matiis! HAHAHAHAHA 💖
          </p>

          <img
            src="https://media4.giphy.com/media/m0BbBJvsU8GDun2gQ1/giphy.gif"
            className="mx-auto rounded-2xl shadow-2xl max-w-md w-full mb-12"
          />

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Now let's get your special certificate! 📜
            </h2>
            <Certificate girlfriendName={girlfriendName} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-400 flex items-center justify-center relative overflow-hidden p-4">
      <div className="floating-hearts">
        {[...Array(window.innerWidth < 640 ? 8 : 15)].map((_, i) => (
          <Heart
            key={i}
            className="floating-heart text-red-500 opacity-40"
            fill="currentColor"
            size={24}
          />
        ))}
      </div>

      <div className="max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center z-10">
        <div className="text-6xl mb-4 animate-pulse">💖</div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 mb-6">
          Will You Be My Valentine?
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-8">
          Please don't click "No", babyyy 🥹
        </p>

         {showMessage && (
          <p className="text-xl md:text-2xl text-red-500 font-semibold mb-6 animate-shake">
            {showMessage}
          </p>
        )}

        <img
          src={currentGif}
          className="mx-auto rounded-2xl shadow-lg max-w-sm w-full mb-8"
        />

        <div className="relative h-48 sm:h-40 flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <button
            ref={yesRef}
            onClick={handleYesClick}
            style={{ transform: `scale(${yesButtonSize})` }}
            className="w-64 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-xl md:text-2xl"
          >
            Yes! 💕
          </button>

          <button
            onClick={handleNoClick}
            style={{
              position: noClickCount > 0 ? 'absolute' : 'relative',
              left: noClickCount > 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noClickCount > 0 ? `${noButtonPosition.y}px` : 'auto',
              transform: `scale(${Math.max(0.3, 1 - noClickCount * 0.1)})`,
              transition:
                'left 0.45s cubic-bezier(0.22,1,0.36,1), top 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.2s ease-out'
            }}
            className={`w-64 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-xl md:text-2xl ${
              panic ? 'animate-panic' : ''
            }`}
          >
            No 😢
          </button>
        </div>

        <p className="text-gray-500 text-xl">
          {noClickCount > 5
            ? "SIGE NAAAA HUHUHUHUHU! 😭"
            : "Choose wisely 🫵🏻"}
        </p>
      </div>
    </div>
  );
}

export default App;

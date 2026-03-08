// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="title-emoji">🌸</span>
          С 8 Марта, дорогие девушки!
          <span className="title-emoji">🌷</span>
        </h1>
        <p className="header-subtitle">
          Каждая из вас — весенний цветок, который делает наш мир прекраснее
        </p>

        {/* Кнопка для показа/скрытия плеера */}
        <button className="music-button" onClick={() => setShowPlayer(!showPlayer)}>
          {showPlayer ? '🔇 Скрыть плеер' : '🎵 Слушать Young And Beautiful'}
        </button>

        {/* Плеер YouTube, который появляется по клику */}
        {showPlayer && (
          <div className="youtube-player-container">
            <iframe
              width="100%"
              height="80"
              src="https://www.youtube.com/embed/_MWEapW4PaE?autoplay=1&loop=1&playlist=_MWEapW4PaE"
              title="Lana Del Rey - Young And Beautiful"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* Декоративные цветы (как в вашем коде) */}
      <div className="flower-decoration">
        <div className="flower flower1">🌷</div>
        <div className="flower flower2">🌹</div>
        <div className="flower flower3">🌸</div>
        <div className="flower flower4">🌺</div>
        <div className="flower flower5">🌼</div>
      </div>
    </header>
  );
};

export default Header;
// src/components/GirlPopup/GirlPopup.jsx
import React, { useEffect } from 'react';
import './GirlPopup.css';

const GirlPopup = ({ girl, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!girl) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="popup-inner">
          <div className="popup-image-container">
            <img 
              src={girl.image} 
              alt={girl.name}
              className="popup-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x500?text=Фото+девушки';
              }}
            />
            <div className="image-overlay">
              <span className="overlay-flower">{girl.flower}</span>
            </div>
          </div>
          
          <div className="popup-info">
            <h2 className="popup-name">
              {girl.name} <span className="name-flower">{girl.flower}</span>
            </h2>
            
            <div className="greeting-container">
              <p className="greeting-text">{girl.greeting}</p>
            </div>
            
            <div className="wishes-section">
              <h3 className="wishes-title">С наилучшими пожеланиями:</h3>
              <div className="wishes-decoration">
                <span>🌸</span>
                <span>🌷</span>
                <span>🌹</span>
                <span>🌺</span>
                <span>🌼</span>
              </div>
            </div>
            
            <div className="signature">
              <p>С любовью, твоя группа 💝</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GirlPopup;
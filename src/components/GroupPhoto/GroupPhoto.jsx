import React, { useState } from 'react';
import './GroupPhoto.css';
import groupPhoto from '../../assets/images/group-photo.jpg';

const GroupPhoto = ({ girls }) => {
  const [hoveredGirl, setHoveredGirl] = useState(null);

  // Координаты для каждой девушки (нужно настроить под ваше фото)
  const positions = [
    { id: 1, name: "Айтурган", top: "20%", left: "10%" },
    { id: 2, name: "Альбина", top: "20%", left: "25%" },
    { id: 3, name: "Зухра", top: "20%", left: "40%" },
    { id: 4, name: "Акдана", top: "35%", left: "15%" },
    { id: 5, name: "Элима", top: "35%", left: "30%" },
    { id: 6, name: "Мадина", top: "35%", left: "45%" },
    { id: 7, name: "Асема", top: "50%", left: "20%" },
    { id: 8, name: "Аиша", top: "50%", left: "35%" },
    { id: 9, name: "Баяна", top: "50%", left: "50%" },
    { id: 10, name: "Айэлина", top: "65%", left: "25%" },
    { id: 11, name: "Даткайым", top: "65%", left: "40%" },
  ];

  return (
    <div className="group-photo-container">
      <h2 className="photo-title">Наши прекрасные девушки 🌸</h2>
      <div className="photo-wrapper">
        <img src={groupPhoto} alt="Групповое фото" className="group-photo" />
        
        {/* Маркеры с именами */}
        {positions.map(pos => {
          const girl = girls.find(g => g.id === pos.id);
          return (
            <div
              key={pos.id}
              className={`name-marker ${hoveredGirl === pos.id ? 'active' : ''}`}
              style={{ top: pos.top, left: pos.left }}
              onMouseEnter={() => setHoveredGirl(pos.id)}
              onMouseLeave={() => setHoveredGirl(null)}
            >
              <span className="marker-dot">●</span>
              <span className="marker-name">{girl.name}</span>
              {hoveredGirl === pos.id && (
                <div className="marker-tooltip">
                  <span className="tooltip-flower">{girl.flower}</span>
                  <p>{girl.greeting.substring(0, 50)}...</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupPhoto;
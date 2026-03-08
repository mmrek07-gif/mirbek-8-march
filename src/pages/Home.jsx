// src/pages/Home.jsx
import React, { useState } from 'react';
import Header from '../components/Header/Header.jsx';
import GroupPhoto from '../components/GroupPhoto/GroupPhoto.jsx'; // Добавьте импорт
import GirlCard from '../components/GirlCard/GirlCard.jsx';
import GirlPopup from '../components/GirlPopup/GirlPopup.jsx';
import { girls } from '../data/girls.js';
import './Home.css';

const Home = () => {
  const [selectedGirl, setSelectedGirl] = useState(null);
  const [showGroupPhoto, setShowGroupPhoto] = useState(false); // Для переключения

  return (
    <div className="home">
      <Header />
      
      <div className="greeting-banner">
        <h2>Наши прекрасные девушки</h2>
        <p>11 причин для улыбки в этот весенний день</p>
        
        {/* Кнопка для переключения между видами */}
        <button 
          className="view-toggle"
          onClick={() => setShowGroupPhoto(!showGroupPhoto)}
        >
          {showGroupPhoto ? '👤 Показать карточки' : '👥 Показать групповое фото'}
        </button>
      </div>
      
      {showGroupPhoto ? (
        <GroupPhoto girls={girls} />
      ) : (
        <div className="cards-container">
          {girls.map(girl => (
            <GirlCard 
              key={girl.id} 
              girl={girl} 
              onClick={setSelectedGirl}
            />
          ))}
        </div>
      )}
      
      {selectedGirl && (
        <GirlPopup 
          girl={selectedGirl} 
          onClose={() => setSelectedGirl(null)}
        />
      )}
      
      <footer className="footer">
        <p>Сделано с ❤️ для наших замечательных девушек</p>
        <p className="footer-date">8 Марта 2026</p>
      </footer>
    </div>
  );
};

export default Home;
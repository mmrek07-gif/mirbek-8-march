import React from 'react';

const GirlCard = ({ girl, onClick }) => {
  return (
    <div 
      onClick={() => onClick(girl)}
      style={{
        padding: '20px',
        margin: '10px',
        background: '#ffb6c1',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      <h3>{girl.name}</h3>
      <div>{girl.flower}</div>
    </div>
  );
};

export default GirlCard;
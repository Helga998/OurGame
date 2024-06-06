import React from 'react';

function DogCard({dog}) {
  return (
    <div>
      <h2>{dog.breed}</h2>
      <img src={dog.img} className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" width={820} height={280}></img>
      <h2>{dog.description}</h2>
    </div>
  );
}

export default DogCard;
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import DogCard from './DogCard';
import axios from 'axios';
 

function DogCards() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await axios.get("api/dogs")
    setDogs(response.data.dogs);
  }
  console.log(dogs, 'dogs');
  return (
    <div>
          <div className='d-flex justify-content-around flex-wrap'>
            
      {
        dogs.map((dog) => {
          return (
              <DogCard key={dog.id} dog={dog}/>
          )
        })
      }
    </div>
    </div>
    // <div>dogs</div>
  );
}

export default DogCards;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import DogCard from './DogCard';
import Modal from '../Modal';
 

function DogCards() {
  const {id} = useParams()
  const [dog, setDog] = useState('');
  const [answer, setAnswer] = useState('');
  const[rightAnswer, setRightAnswer] = useState('');
  // const[modal, setModal] = useState(false)

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    const response = await axios.get(`/api/dogs/${id}`)
    setDog(response.data.dog);
  }
  console.log(dog, 'dog');

  // function validate(input) {
  //   if (input.trim() === '') {
  //     setModal(true)
  //     return 
  //   }
  // }

  function checkAnswer() {
    // validate(answer)
    if(answer.toLowerCase() === dog.Answer.answer.toLowerCase()) {
      setRightAnswer('Wow!!!')
      setAnswer('')
      console.log('Wow!!!')
      
    } else {
      setRightAnswer(`No!!
      Правильный ответ: ${dog.Answer.answer}`)
      setAnswer('')
      console.log('No!!')
    }
  }


  // const handleStateClear = () => {
  //   setRightAnswer('')

  // }

  return (

    <>
      <div className="d-flex justify-content-center">
        
        <div className="row ">
          <h2>Угадай, кто это?</h2>
          <img src={dog.img} alt="" width="300px" height="800px" />
          <p>{dog.breed}</p>
          <p>{dog.description}</p>
          <input
            style={{ fontSize: '30px' }}
            width="200px"
            placeholder="Введи ответ"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
           />
          {rightAnswer ? (
            <button className="btn btn-outline-success" style={{ fontSize: '30px' }}>
              <Link
                className="link-underline-light link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold"
                to={`/dogs/${+id + 1}`}
              >
                Next
              </Link>
            </button>
          ) : (
            <button
              style={{ fontSize: '30px' }}
              width="80px"
              height="50px"
              className="btn btn-outline-warning link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold"
              className="btn btn-dark"
              type="button"
              onClick={checkAnswer}
            >
              OK
            </button>
            // { id === 16 ?
            //   <button className="btn btn-outline-success"> <Link to='/'>Главное меню</Link></button>
                
            //     : <button className="btn btn-outline-success"><Link className="link-underline-light link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold" to={`/questions/${+id + 1}`}>Next</Link></button>
    
            //   }
          )}
        </div>

/////
      </div>

      <div className="fs-2 fw-bold">{rightAnswer}</div>
    </>
  );
}

export default DogCards;

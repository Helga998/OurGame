import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import DogCard from './DogCard';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
 

function DogCards() {
  const {id} = useParams()
  const [dog, setDog] = useState('');
  const [answer, setAnswer] = useState('');
  const[rightAnswer, setRightAnswer] = useState('');

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    const response = await axios.get(`/api/dogs/${id}`)
    setDog(response.data.dog);
  }
  console.log(dog, 'dog');

  function checkAnswer() {
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

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row">
          <img src={dog.img} alt="" width="300px" height="500px" />
          <input
            placeholder="Введи ответ"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={rightAnswer ? true : false}
          ></input>
          {rightAnswer ? (
            <button className="btn btn-outline-success">
              <Link
                className="link-underline-light link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold"
                to={`/dogs/${+id + 1}`}
              >
                Next
              </Link>
            </button>
          ) : (
            <button
              width="40px"
              height="50px"
              className="btn btn-outline-warning link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold"
              class="btn btn-dark"
              type="button"
              onClick={checkAnswer}
            >
              OK
            </button>
          )}
        </div>
      </div>

      <div className="fs-2 fw-bold">{rightAnswer}</div>
    </>
  );
}

export default DogCards;

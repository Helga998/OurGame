import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import DogCard from './DogCard';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Modal from '../Modal';
 

function DogCards() {
  const {id} = useParams()
  const [dog, setDog] = useState('');
  const [answer, setAnswer] = useState('');
  const[rightAnswer, setRightAnswer] = useState('');
  const[modal, setModal] = useState(false)

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    const response = await axios.get(`/api/dogs/${id}`)
    setDog(response.data.dog);
  }
  console.log(dog, 'dog');

  function validate(input) {
    if (input.trim() === '') {
      setModal(true)
      return 
    }
  }

  function checkAnswer() {
    validate(answer)
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
    <div className='d-flex justify-content-center'>
      <div className='row'>
      <img src={dog.img} alt="" width='300px' height='300px' />
        <input placeholder='Введи ответ' value={answer} onChange={(e)=> setAnswer(e.target.value)} disabled={rightAnswer? true : false}></input>
        {rightAnswer
          ? <button className="btn btn-outline-success" onClick={()=>   setRightAnswer('')}>
              <Link className="link-underline-light link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold" to={`/dogs/${+id + 1}`}>Next</Link>
            </button> 
          : <button width='30px' height='30px' className="btn btn-outline-warning link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fw-bold" type='button' onClick={checkAnswer}>OK</button>
        }
       {modal && <Modal modal={modal} setModal={setModal}></Modal>}
        

        <div className="fs-2 fw-bold">{rightAnswer}</div>
      </div>
      
    </div>
   
  );
}

export default DogCards;
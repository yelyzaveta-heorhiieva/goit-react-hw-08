import { useEffect, useState } from 'react';
import s from './NotFoundPage.module.css'
import { PiSmileyMeltingFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(prev => prev - 1)
    }, 1000)

    if (counter === 0) {
   navigate('/')
    }
    
    return () => clearInterval(id);
  }, [counter])
  

  return (
    <p className={s.text}>
      Page is not found, after <span className={s.counter}>{counter}s</span>you will be redirected to the home page<PiSmileyMeltingFill className={s.icon} />
    </p>
  )
}

export default NotFoundPage
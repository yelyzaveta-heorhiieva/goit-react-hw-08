// import SplashCursor from "../../SplashCursor"
import clsx from 'clsx'
import s from './HomePage.module.css'
import book from '../../book.gif'


const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        <span className={s.letter}>PH</span>
        <span className={clsx(s.letter, s.left, s.colorLetter)}>O</span>
        <span className={s.letter}>NEB</span>
        <span className={clsx(s.letter, s.right, s.colorLetter)}>O</span>
        <span className={clsx(s.letter, s.right, s.colorLetter)}>O</span>
        <span className={s.letter}>K</span>
      </h1>
     <img src={book}></img>
    </div>
  )
}

export default HomePage

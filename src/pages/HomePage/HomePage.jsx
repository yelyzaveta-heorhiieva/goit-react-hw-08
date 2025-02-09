import clsx from 'clsx'
import s from './HomePage.module.css'
import book from '../../assets/book.gif'
import DocumentTitle from '../../components/DocumentTitle'


const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h1 className={s.title}>
            <span className={s.letter}>PH</span>
            <span className={clsx(s.letter, s.left, s.colorLetter)}>O</span>
            <span className={s.letter}>NEB</span>
            <span className={clsx(s.letter, s.right, s.colorLetter)}>O</span>
            <span className={clsx(s.letter, s.right, s.colorLetter)}>O</span>
            <span className={s.letter}>K</span>
          </h1>
               <img src={book} alt='book'/>
        </div>
      </div>
    </>
  )
}

export default HomePage

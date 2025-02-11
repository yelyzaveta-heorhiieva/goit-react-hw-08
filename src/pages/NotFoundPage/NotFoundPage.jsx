import s from './NotFoundPage.module.css'
import { PiSmileyMeltingFill } from "react-icons/pi";

const NotFoundPage = () => {
  return (
    <p className={s.text}>
      Page is not found <PiSmileyMeltingFill className={s.icon} />
    </p>
  )
}

export default NotFoundPage
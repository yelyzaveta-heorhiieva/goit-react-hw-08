import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css"
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  }

     
  return (
        <>
        <label className={s.label}>Find contacts by name
          <input className={s.input} type="text" name="search" value={filter} onChange={handleFilterChange} />
        </label>
        </>
  )
}

export default SearchBox

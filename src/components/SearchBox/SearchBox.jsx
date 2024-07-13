import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="input-wrapp">
      <p>Find Contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        className='input'
      />
    </div>
  );
}

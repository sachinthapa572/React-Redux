import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addsearchdata } from '../redux/Cart/ProductSlice';


function Search() {
  const [data, setData] = useState('');
  let dispatch = useDispatch();
  const handelchange = (e) => {
    const newValue = e.target.value;
    setData(newValue);
    dispatch(addsearchdata(newValue));
  };

  return (
    <div>
      <label
        htmlFor="Username"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          value={data}
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Enter the Product "
          onChange={handelchange}
          autoFocus
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs ">
          Enter the Product
        </span>
      </label>
    </div>
  );
}

export default Search;

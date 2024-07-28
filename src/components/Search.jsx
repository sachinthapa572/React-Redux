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
    <form>
      <input
        type="text"
        value={data}
        className="border-2 ml-[500px] w-[500px] p-2 text-large font-medium	outline-black mb-2"
        onChange={handelchange}
      />
    </form>
  );
}

export default Search;

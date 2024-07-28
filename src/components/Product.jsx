import '../App.css';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fetchProduct } from '../redux/Cart/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../redux/Cart/ProductSlice';

function Product() {
  //! Local storage implement hane
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);
  const searchdata = useSelector((state) => state.product.searchdata);
  // console.log(searchdata);
  useEffect(() => {
    dispatch(fetchProduct());
    console.log('dispatch sucessfully !!');
  }, [dispatch]);

  return (
    <>
      {status === STATUSES.ERROR ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-red-500 text-lg">
          Error: {status.error}
        </div>
      ) : status === STATUSES.LOADING ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-2 text-lg">
          Fetching the data{' '}
          <AiOutlineLoading3Quarters size={30} className="text-blue-500 animate-spin" />
        </div>
      ) : (
        <section className="product">
          {product &&
            product
              .filter((currElem) => {
                if (searchdata.length === 0) {
                  return currElem;
                } else {
                  console.log(currElem.title.toLowerCase());
                  return currElem.title.toLowerCase().includes(searchdata.toLowerCase());
                }
              })
              .map((currElem) => <ProductCard key={currElem.id} ProductData={currElem} />)}
        </section>
      )}
    </>
  );
}

export default Product;

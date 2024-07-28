import '../App.css';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fetchProduct } from '../redux/Cart/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../redux/Cart/ProductSlice';

function Product() {
  //! Local storage implement hane
  let dispatch = useDispatch();
  let { data: product, status } = useSelector((state) => state.product);
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
          {product.map((currElem) => (
            <ProductCard key={currElem.id} ProductData={currElem} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;

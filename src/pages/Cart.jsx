import CartCard from '../components/CartCard';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.cart);
  const FinalPrice = parseInt(
    products.reduce((acc, currElem) => acc + currElem.price * currElem.Quantity, 0)
  );
  
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Your items in the cart 
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> $ {FinalPrice}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => {
            navigate('/');
          }}
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

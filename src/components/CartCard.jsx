import { Trash } from 'lucide-react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useDispatch } from 'react-redux';
import { removeitems } from '../redux/Cart/cartSlice';

function CartCard({ product }) {
  const { id, title, price, category, image, rating, Quantity } = product;
  const dispatch = useDispatch();

  return (
    <>
      <li key={id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
            src={image}
            alt={title}
          />
          <div className="flex w-full flex-col justify-between pb-4">
            <div className="flex w-full justify-between space-x-2 pb-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{category}</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">${price * Quantity}</p>
              </div>
            </div>
            <div className="flex  text-sm">
              <button
                type="button"
                className="flex items-center space-x-2 px-2 py-1 pl-0"
                onClick={() => {
                  dispatch(removeitems(id));
                }}
              >
                <Trash size={16} />
                <span>Remove</span>
              </button>
              <button type="button" className="flex items-center space-x-2 px-2 py-1">
                <span>
                  <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                </span>
              </button>
              <div className="ml-auto">
                <p className="text-lg font-semibold ml-auto"> Quantity: {Quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartCard;

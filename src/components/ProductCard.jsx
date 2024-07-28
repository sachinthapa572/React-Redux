import '../App.css';
import { toast } from 'react-toastify';
import { additems } from '../redux/Cart/cartSlice';
import { useDispatch } from 'react-redux';

function ProductCard({ ProductData }) {
  const { title, price, category, description, image, rating } = ProductData;
  const dispatch = useDispatch();

  const handelclick = () => {
    dispatch(additems(ProductData));
  };

  return (
    <div className="w-[300px] rounded-md border">
      <img src={image} alt={category} className="h-[200px] w-full rounded-t-md object-contain" />
      <div className="p-4">
        <h1 className="text-lg font-semibold h-15 w-full line-clamp-1">{title} &nbsp;</h1>
        <p className="mt-3 text-sm text-gray-600 h-15 w-full line-clamp-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-sm text-gray-600">
            Rating: {rating.rate} ({rating.count} reviews)
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => {
            toast.success(' 💕 Product Added');
            handelclick();
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

'use client';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Logo = () => (
  <div className="inline-flex items-center space-x-2">
    <span></span>
    <Link to="/">
      <span className="font-bold">Redux Store </span>
    </Link>
  </div>
);

function Navbar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart.cart);
  console.log(data);
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden space-x-3 lg:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>

          <button
            type="button"
            className="  rounded-md  px-3 py-2 text-[15px] font-semibold text-black shadow-sm "
            onClick={() => navigate('/cart')}
          >
            Cart Items : {data.length}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

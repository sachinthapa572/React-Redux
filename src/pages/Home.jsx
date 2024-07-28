import Product from '../components/Product';
import Search from '../components/Search';

function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }} className="text-5xl pb-9">
        Welcome To The Redux Used Store
      </h1>
      <Search />
      <Product />
    </>
  );
}

export default Home;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoMain from './pages/TodoMain';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/todo',
        element: <TodoMain />,
      },
      {
        path: '/login',
        element:<SignIn/>
      },
      {
        path: '/signin',
        element:<SignUp/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;

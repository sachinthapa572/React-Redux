import { useNavigate } from 'react-router-dom';
function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default ErrorPage;

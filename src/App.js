import './App.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from 'react-bootstrap/Spinner'

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return (
    
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    )

  return (
    <div>   
      <LoginButton/>
      <p>home page</p>
    </div>
  );
}

export default App;

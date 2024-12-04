import { useEffect } from 'react';
import { replace, useNavigate } from 'react-router-dom';

// Determine auth status here
const SessionProvider = ({ children }) => {
  const auth = true;
  const navigate = useNavigate();

  useEffect(() => {
    console.count('authenticating');
    if (!auth) {
      navigate('/signin', { replace: true });
    }
  }, [auth, navigate]);

  return children;
};

export default SessionProvider;

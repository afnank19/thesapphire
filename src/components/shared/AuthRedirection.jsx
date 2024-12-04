import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRedirection = ({ children }) => {
  const auth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/', { replace: true });
    }
  }, [auth]);

  return children;
};

export default AuthRedirection;

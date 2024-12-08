import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../services/state/authStore';

const AuthRedirection = ({ children }) => {
  // const accessToken = useAuthStore((state) => state.accessToken);

  let auth = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/', { replace: true });
    }
  }, [auth, navigate]);

  return children;
};

export default AuthRedirection;

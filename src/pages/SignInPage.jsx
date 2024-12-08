import { Link } from 'react-router-dom';
import SignInForm from '../components/auth/SignInForm';

// TODO: Add link to sign up page
const SignInPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-2xl font-serif ">The Nust Sapphire</h1>
      <div className="flex-grow flex-col flex items-center justify-center w-full">
        <SignInForm />
        <p className="text-sm text-gray-700">
          No account yet?{' '}
          <Link to={'/signup'} className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

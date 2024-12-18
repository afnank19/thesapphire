import { Link } from 'react-router-dom';
import SignUpForm from '../components/auth/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-2xl font-serif ">The Nust Sapphire</h1>
      <div className="flex-grow flex-col flex items-center justify-center w-full">
        <SignUpForm />
        <p className="text-sm text-gray-700 dark:text-[#7D7D7D]">
          Have an account?{' '}
          <Link to={'/signin'} className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

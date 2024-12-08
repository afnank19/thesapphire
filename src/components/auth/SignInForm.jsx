import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useAuthStore } from '../../services/state/authStore';
import { useNavigate } from 'react-router-dom';
import { authInstance } from '../../services/api/axios';
import { signIn } from '../../services/api/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  // const accessToken = useAuthStore((state) => state.accessToken);

  const navigate = useNavigate();

  // const { data, error, isError, isPending } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: async () => {
  //     const res = await authInstance.get('/users/jkWnP3r2v8D78xuv18q3');

  //     console.log(res.data);
  //     return res.data;
  //   },
  //   retry: (failureCount, error) => {
  //     console.log(failureCount);
  //     if (failureCount === 0) {
  //       return false;
  //     }

  //     console.log(error.response.data.message);
  //     if (error.response.data.message === 'Expired crendentials') {
  //       console.log('refresh the token here, and retry the request');
  //       // Refresh logic here
  //       return true;
  //     }

  //     return false;
  //   }
  // });

  const mutation = useMutation({
    mutationFn: (data) => signIn(data),
    onSuccess: (data) => {
      console.log(data);
      setAccessToken(data.aTkn);
      navigate('/', { replace: true });
    },
    onError: (error) => {
      console.log(error.response.data);
    }
  });

  const handleSignIn = () => {
    if (password === '' || email === '') {
      return;
    }

    mutation.mutate({ email, password });
  };

  return (
    <div className="flex flex-col max-w-xs px-8 py-8 w-full items-center bg-[#262626] rounded-xl gap-8 m-2">
      <h3 className="text-gray-50 font-serif text-xl">Welcome Back</h3>
      <div className="flex flex-col gap-2 w-full text-gray-300">
        <label className="text-sm">Email</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
          placeholder="example@mail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
        <label className="text-sm">Password</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
      </div>
      <button
        className="bg-slate-50 w-full rounded-xl text-sm py-1"
        onClick={handleSignIn}
        disabled={mutation.isPending ? true : false}
      >
        {mutation.isPending ? 'Please wait' : 'Sign In'}
      </button>
    </div>
  );
};

export default SignInForm;

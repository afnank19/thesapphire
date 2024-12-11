// This component may be able to be refactored
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { signUpFormSchema } from '../../utils/schemas';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../services/api/services/user';
import { useAuthStore } from '../../services/state/authStore';
import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../ui/ErrorMessage';
import ErrorToast from '../ui/ErrorToast';
// But this decision is to be made POST state handling
const SignUpForm = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserId = useAuthStore((state) => state.setUserId);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(signUpFormSchema)
  });

  const onSignUpFormSubmit = (data) => {
    console.log('musali');
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: (data) => {
      console.log(data);
      setAccessToken(data.aTkn);
      setUserId(data.id);
      navigate('/', { replace: true });
    },
    onError: (error) => {
      console.log(error.response.data);
      setError('root', { message: error.response?.data?.message });
    }
  });

  return (
    <div className="flex flex-col max-w-sm px-8 py-8 w-full items-center bg-[#262626] rounded-xl gap-8 m-2">
      <h3 className="text-gray-50 font-serif text-2xl">Create your account</h3>
      <form
        className="flex flex-col gap-2 w-full text-gray-300"
        onSubmit={handleSubmit(onSignUpFormSubmit)}
      >
        <label className="text-sm">Name</label>
        <input
          {...register('name')}
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
        ></input>
        {errors.name && <ErrorMessage errorMessage={errors.name.message} />}
        <label className="text-sm">Email</label>
        <input
          {...register('email')}
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
          placeholder="example@mail.com"
        ></input>
        {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
        <label className="text-sm">Password</label>
        <input
          {...register('password')}
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="password"
        ></input>
        {errors.password && (
          <ErrorMessage errorMessage={errors.password.message} />
        )}
        <label className="text-sm">CMS</label>
        <input
          {...register('cms')}
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
          placeholder="00000123456"
        ></input>
        {errors.cms && <ErrorMessage errorMessage={errors.cms.message} />}
        <label className="text-sm">Campus</label>
        <select
          {...register('campus')}
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
        >
          {/* Should map over a list */}
          <option value=""></option>
          <option value="Military College of Signals">
            Military College of Signals
          </option>
          <option value="School of Electrical Engineering and Computer Science">
            School of Electrical Engineering and Computer Science
          </option>
          <option value="College of Aeronautical Engineering">
            College of Aeronautical Engineering
          </option>
        </select>
        {errors.campus && <ErrorMessage errorMessage={errors.campus.message} />}
        <button
          disabled={mutation.isPending}
          className="bg-slate-50 text-black w-full rounded-xl text-sm py-1 mt-6"
          type="submit"
        >
          {mutation.isPending ? 'Please wait' : 'Sign Up'}
        </button>
        {errors.root && <ErrorToast message={errors.root.message} />}
      </form>
    </div>
  );
};

export default SignUpForm;

const SignInForm = () => {
  return (
    <div className="flex flex-col max-w-xs px-8 py-8 w-full items-center bg-[#262626] rounded-xl gap-8 m-2">
      <h3 className="text-gray-50 font-serif text-xl">Welcome Back</h3>
      <div className="flex flex-col gap-2 w-full text-gray-300">
        <label className="text-sm">Email</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
          placeholder="example@mail.com"
        ></input>
        <label className="text-sm">Password</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="password"
        ></input>
      </div>
      <button className="bg-slate-50 w-full rounded-xl text-sm py-1">
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;

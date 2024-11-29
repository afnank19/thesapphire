// This component may be able to be refactored
// But this decision is to be made POST state handling
const SignUpForm = () => {
  return (
    <div className="flex flex-col max-w-sm px-8 py-8 w-full items-center bg-[#262626] rounded-xl gap-8 m-2">
      <h3 className="text-gray-50 font-serif text-2xl">Create your account</h3>
      <div className="flex flex-col gap-2 w-full text-gray-300">
        <label className="text-sm">Name</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
        ></input>
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
        <label className="text-sm">CMS</label>
        <input
          className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white"
          type="text"
          placeholder="00000123456"
        ></input>
        <label className="text-sm">Campus</label>
        <select className="bg-[#262626] border border-gray-600 rounded-lg p-1 text-sm text-white">
          {/* Should map over a list */}
          <option value=""></option>
          <option value="campus1">Military College of Signals</option>
          <option value="campus2">
            School of Electrical Engineering and Computer Science
          </option>
          <option value="campus3">College of Aeronautical Engineering</option>
        </select>
      </div>
      <button className="bg-slate-50 w-full rounded-xl text-sm py-1">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;

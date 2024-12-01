const ProfileSettings = () => {
  return (
    <div className="flex flex-col pb-12 mb-4">
      <h3 className="border-t border-gray-300 py-2 mt-2 text-lg">Profile</h3>
      <p className="text-md text-gray-800 mt-8">About</p>
      <p className="text-sm text-gray-400 mb-2">A short bio about yourself</p>
      <textarea
        className="bg-[#EAEAEA] border border-gray-300 rounded-lg p-1 text-sm text-black focus:border-gray-400 outline-none resize-none h-20"
        type="text"
        maxLength={160}
      ></textarea>
      <button className="bg-green-600 hover:bg-green-500 text-white w-full rounded-2xl text-sm px-4 py-1 mt-8 max-w-max self-end">
        Update
      </button>
    </div>
  );
};

export default ProfileSettings;

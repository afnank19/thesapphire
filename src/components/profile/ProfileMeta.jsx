const ProfileMeta = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 mt-2 pb-8 w-full border-b border-[#3b3b3b] relative">
      <div className="bg-gradient-to-bl from-pink-500  via-red-500 to-yellow-500 h-40 rounded-2xl absolute w-full -z-10 opacity-0"></div>
      <div className="bg-blue-700 rounded-xl bg-opacity-10 border-2 border-blue-600 border-opacity-15">
        <div className="p-4">
          <h1 className="font-medium text-4xl">{userData.name}</h1>
          <p className="text-[#6F6F6F] dark:text-[#7D7D7D] text-sm">
            {userData.campus}
          </p>
        </div>
        <div className="mt-6 p-4">
          <h3 className="font-medium text-2xl">About</h3>
          <p className="font text-[#6F6F6F] dark:text-[#7D7D7D]  text-base">
            {userData.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMeta;

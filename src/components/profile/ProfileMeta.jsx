const ProfileMeta = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 p-2 w-full border-b border-[#3b3b3b]">
      <div className="bg-gradient-to-bl from-pink-500  via-red-500 to-yellow-500 h-40 rounded-2xl"></div>
      <div>
        <h1 className="font-bold text-4xl">{userData.name}</h1>
        <p className="text-[#6F6F6F] dark:text-[#7D7D7D] text-sm">
          {userData.campus}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-2xl">About</h3>
        <p className="font-light text-[#6F6F6F] text-base">{userData.about}</p>
      </div>
    </div>
  );
};

export default ProfileMeta;

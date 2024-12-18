const ProfileMeta = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 p-2 w-full">
      <div className="bg-gradient-to-bl from-pink-500  via-red-500 to-yellow-500 h-40 rounded-2xl"></div>
      <div>
        <h1 className="font-extrabold text-4xl">{userData.name}</h1>
        <p className="font-light text-[#6F6F6F] text-sm">{userData.campus}</p>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-2xl">About</h3>
        <p className="font-light text-[#6F6F6F] text-base">{userData.about}</p>
      </div>
      <h1 className="font-medium text-xl mt-4 pt-4 border-t-2">
        By {userData.name}
      </h1>
    </div>
  );
};

export default ProfileMeta;

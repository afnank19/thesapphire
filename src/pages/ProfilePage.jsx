import ProfileMeta from '../components/profile/ProfileMeta';

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-3xl w-full p-2">
        <ProfileMeta />
      </div>
    </div>
  );
};

export default ProfilePage;

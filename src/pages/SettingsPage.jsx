import AccountSettings from '../components/settings/AccountSettings';
import ProfileSettings from '../components/settings/ProfileSettings';
import SectionHeader from '../components/ui/SectionHeader';

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-xl w-full p-2">
        <div className="flex gap-2">
          <SectionHeader headingText={'Settings'} />
        </div>
        <ProfileSettings />
        <AccountSettings />
      </div>
    </div>
  );
};

export default SettingsPage;

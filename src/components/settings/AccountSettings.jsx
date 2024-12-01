const AccountSettings = () => {
  return (
    <div className="flex flex-col  mb-4">
      <h3 className="border-t border-gray-300 py-2 mt-2 text-lg">Account</h3>

      <button className="text-red-600 hover:text-red-500 w-full rounded-2xl text-sm mt-4 mb-1 max-w-max">
        Delete my account
      </button>
      <p className="text-xs text-gray-500">
        Permanently delete your account and all of your blogs. (FEATURE
        INACTIVE)
      </p>
    </div>
  );
};

export default AccountSettings;

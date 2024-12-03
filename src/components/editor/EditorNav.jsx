const EditorNav = () => {
  return (
    <div className="flex flex-col mb-8 p-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-serif">The Sapphire Editor</h3>
        <div className="flex gap-2">
          <button className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1">
            Save Draft
          </button>
          <button className="bg-green-600 hover:bg-green-500 text-white rounded-2xl text-sm px-4 py-1">
            Publish
          </button>
        </div>
      </div>
      <label className="text-xl text-gray-800 mt-8 mb-2">Title</label>
      <input
        className="bg-[#EAEAEA] border border-gray-300 rounded-lg p-1 text-lg font-bold text-black focus:border-gray-400 outline-none"
        placeholder="eg. The cats of NUST"
      ></input>
    </div>
  );
};

export default EditorNav;

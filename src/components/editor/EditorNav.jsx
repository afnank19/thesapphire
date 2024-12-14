import { useRef, useState } from 'react';
import ImageModal from '../shared/ImageModal';

const EditorNav = ({ editor }) => {
  const [image, setImage] = useState('');
  const [open, setOpen] = useState(false);

  const titleInputRef = useRef();
  const categoryRef = useRef();

  // author x
  // postDate in HP
  // timeToRead in HP
  // title in HP
  // imgUrl in HP
  // teaser in HP (substring)
  // blogRef x
  // tag in HP
  // authorId send from global state in func

  const handlePublish = () => {
    console.log('Publish business logic goes here');
    if (categoryRef.current.value === '') {
      alert('Please choose a tag!');
    }
  };

  return (
    <div className="flex flex-col mb-4 p-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-serif">The Sapphire Editor</h3>
        <div className="flex gap-2">
          <button className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1">
            Save Draft
          </button>
          <button
            className="bg-green-600 hover:bg-green-500 text-white rounded-2xl text-sm px-4 py-1"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>
      </div>
      {/* Blog Meta Data Form */}
      <label className="text-xl text-gray-800 mt-8 mb-2">Title</label>
      <input
        maxLength={70}
        ref={titleInputRef}
        className="bg-[#EAEAEA] border border-gray-300 rounded-lg p-1 text-lg font-bold text-black focus:border-gray-400 outline-none"
        placeholder="eg. The cats of NUST"
      ></input>
      <div className="flex flex-wrap justify-between items-center py-2">
        <button
          className="bg-green-600 hover:bg-green-500 text-white rounded-2xl text-sm px-4 py-1 w-1/5 my-4"
          onClick={() => {
            console.log(titleInputRef.current.value);
            console.log(editor.getHTML());
            setOpen(true);
          }}
        >
          Choose an image
        </button>
        <select
          className="bg-[#f1f1f1] border border-gray-300 rounded-lg p-1 text-sm text-black h-max"
          ref={categoryRef}
        >
          <option value="">Choose a tag</option>
          <option value="Software">Software</option>
        </select>
      </div>
      {/* Image Selection modal */}
      <img src={image}></img>
      {open ? <ImageModal setImage={setImage} setOpen={setOpen} /> : null}
    </div>
  );
};

export default EditorNav;

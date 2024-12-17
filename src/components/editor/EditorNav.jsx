import { useRef, useState } from 'react';
import ImageModal from '../shared/ImageModal';
import {
  calculateTimeToRead,
  createTeaser,
  sanitizeHTML
} from '../../utils/helpers';
import { useMutation } from '@tanstack/react-query';
import { postABlog } from '../../services/api/services/blog';
import { toast, Toaster } from 'sonner';

import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';

const EditorNav = ({ editor }) => {
  const [image, setImage] = useState('');
  const [open, setOpen] = useState(false);

  const titleInputRef = useRef();
  const categoryRef = useRef();

  const navigate = useNavigate();
  // author x
  // postDate in HP
  // timeToRead in HP [X]
  // title in HP
  // imgUrl in HP
  // teaser in HP (substring) [X]
  // blogRef x
  // tag in HP
  // authorId send from global state in func

  const mutation = useMutation({
    mutationFn: (data) => postABlog(data),
    onSuccess: (data) => {
      toast.success('Successfully Posted');
      navigate('/');
    },
    onError: (error) => {
      toast.error('Something went wrong :(');
    }
  });

  const handlePublish = () => {
    if (categoryRef.current.value === '') {
      toast.warning('Please choose a category!');
      return;
    }

    const timeToRead = calculateTimeToRead(
      editor.storage.characterCount.words()
    );

    if (titleInputRef.current.value === '') {
      toast.warning('Blogs must have a title');
      return;
    }

    if (image === '') {
      toast.warning('Please select a cover image');
      return;
    }

    const content = DOMPurify.sanitize(editor.getHTML());
    // console.log(new Date(Date.now()).toDateString());
    const blog = {
      timeToRead: timeToRead,
      title: titleInputRef.current.value,
      imgUrl: image,
      teaser: createTeaser(editor.getText()),
      tag: categoryRef.current.value,
      content: content,
      displayDate: Date.now()
    };

    // console.log(blog);
    mutation.mutate(blog);
  };

  return (
    <div className="flex flex-col mb-4 p-2">
      <Toaster position="bottom-left" richColors />
      <div className="flex justify-between">
        <h3 className="text-xl font-news">The Sapphire Editor</h3>
        <div className="flex gap-2">
          <button className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1">
            Save Draft
          </button>
          <button
            disabled={mutation.isPending ? true : false}
            className="bg-green-600 hover:bg-green-500 text-white rounded-2xl text-sm px-4 py-1"
            onClick={handlePublish}
          >
            {mutation.isPending ? 'Publishing' : 'Publish'}
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
          className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1 w-1/5 my-4"
          onClick={() => {
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
          <option value="Entertainment">Entertainment</option>
          <option value="Art">Art</option>
        </select>
      </div>
      {/* Image Selection modal */}
      <img src={image}></img>
      {open ? <ImageModal setImage={setImage} setOpen={setOpen} /> : null}
    </div>
  );
};

export default EditorNav;

import Editor from '../components/editor/Editor';

const WritingPage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="max-w-3xl w-full p-2">
        <Editor />
      </div>
    </div>
  );
};

export default WritingPage;

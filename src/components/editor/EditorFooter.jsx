import { useCurrentEditor } from '@tiptap/react';

const EditorFooter = ({ limit }) => {
  const { editor } = useCurrentEditor();

  return (
    <div className="text-sm text-gray-500 mt-8 py-1 px-3 border-t border-gray-300 dark:border-[#3b3b3b]">
      <p>
        {editor.storage.characterCount.characters()} / {limit}
      </p>
      <p>{editor.storage.characterCount.words()} words</p>
    </div>
  );
};

export default EditorFooter;

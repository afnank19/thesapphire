import { useCurrentEditor } from '@tiptap/react';
import EditorNav from './EditorNav';
import MenuBar from './MenuBar';

const EditorHeader = () => {
  const { editor } = useCurrentEditor();

  return (
    <>
      <EditorNav editor={editor} />
      <MenuBar editor={editor} />
    </>
  );
};

export default EditorHeader;

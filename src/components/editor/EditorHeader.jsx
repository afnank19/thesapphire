import { useCurrentEditor } from '@tiptap/react';
import EditorNav from './EditorNav';
import MenuBar from './MenuBar';

const EditorHeader = () => {
  const { editor } = useCurrentEditor();

  return (
    <>
      <EditorNav />
      <MenuBar editor={editor} />
    </>
  );
};

export default EditorHeader;

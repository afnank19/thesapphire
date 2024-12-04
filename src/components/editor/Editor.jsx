import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorHeader from './EditorHeader';

const extensions = [StarterKit];
const content = '<p>Start Typing here...</p>';

const Editor = () => {
  return (
    <div className="m-2 ">
      <EditorProvider
        extensions={extensions}
        content={content}
        slotBefore={<EditorHeader />}
        editorContainerProps={{ className: 'editor-container' }}
        editorProps={{
          attributes: {
            class: 'prose prose-base max-w-none  m-1 focus:outline-none'
          }
        }}
      ></EditorProvider>
    </div>
  );
};

export default Editor;

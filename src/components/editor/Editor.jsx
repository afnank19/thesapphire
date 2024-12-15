import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';

import EditorHeader from './EditorHeader';
import EditorFooter from './EditorFooter';

const limit = 10000;

const extensions = [StarterKit, CharacterCount.configure({ limit: limit })];
const content = '<p>Start Typing here...</p>';

const Editor = () => {
  return (
    <div className="m-2 ">
      <EditorProvider
        extensions={extensions}
        content={content}
        slotBefore={<EditorHeader />}
        slotAfter={<EditorFooter limit={limit} />}
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

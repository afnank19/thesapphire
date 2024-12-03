import {
  Code,
  CodeBlock,
  ListBullets,
  ListDashes,
  Quotes,
  TextB,
  TextItalic,
  TextStrikethrough
} from '@phosphor-icons/react';
import { useCurrentEditor } from '@tiptap/react';

const MenuBar = ({ editor }) => {
  //const { editor } = useCurrentEditor();

  return (
    <div className="flex flex-wrap justify-between gap-2 border-b border-gray-300 p-4">
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <TextB size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <TextItalic size={'1.5rem'} />
      </button>

      <button
        className={`p-1 rounded-lg ${
          editor.isActive('strike') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <TextStrikethrough size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('blockQuote') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run();
        }}
      >
        <Quotes size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('orderedlist') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListDashes size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('bulletList') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <ListBullets size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('code') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleCode().run();
        }}
      >
        <Code size={'1.5rem'} />
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('codeBlock') ? 'bg-gray-300' : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
      >
        <CodeBlock size={'1.5rem'} />
      </button>

      <button
        className={`p-1 rounded-lg ${
          editor.isActive('heading', { level: 1 })
            ? 'bg-gray-300'
            : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
      >
        H1
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('heading', { level: 2 })
            ? 'bg-gray-300'
            : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        H2
      </button>
      <button
        className={`p-1 rounded-lg ${
          editor.isActive('heading', { level: 3 })
            ? 'bg-gray-300'
            : 'bg-gray-200'
        }`}
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
      >
        H3
      </button>
    </div>
  );
};

export default MenuBar;

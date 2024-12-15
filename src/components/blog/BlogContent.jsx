import DOMPurify from 'dompurify';

// TODO: Purify HTML and insert here!
const BlogContent = ({ content }) => {
  return (
    <div className="p-2">
      {/* <p className="text-lg ">{content}</p> */}
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        className="prose prose-base"
      ></div>
    </div>
  );
};

export default BlogContent;

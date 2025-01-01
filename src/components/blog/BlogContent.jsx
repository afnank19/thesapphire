import DOMPurify from 'dompurify';
import { DOMPurifyConfig } from '../../utils/constants';
// TODO: Purify HTML and insert here!

const BlogContent = ({ content }) => {
  return (
    <div className="p-2">
      {/* <p className="text-lg ">{content}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content, DOMPurifyConfig)
        }}
        className="prose prose-xl font-news dark:prose-invert"
      ></div>
    </div>
  );
};

export default BlogContent;

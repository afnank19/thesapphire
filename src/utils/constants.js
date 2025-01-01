export const BLOG_CATEGORIES = [
  'Lifestyle',
  'Technology',
  'Health',
  'Business',
  'Food',
  'Education',
  'Entertainment',
  'Creativity',
  'Environment',
  'Relationships',
  'News',
  'Travel',
  'Interests',
  'Other'
];

export const CAMPUSES = [
  'Military College of Signals',
  'NUST H-12 (Main Campus)',
  'College of Electrical and Mechanical Engineering',
  'College of Aeronautical Engineering',
  'Military College of Engineering',
  'PNEC'
];

export const DEFAULT_ERR_MESSAGE = 'Oops! An error occurred.';

export const DOMPurifyConfig = {
  ALLOWED_TAGS: [
    'p',
    'strong',
    'em',
    's',
    'blockquote',
    'ol',
    'ul',
    'li',
    'code',
    'pre',
    'h1',
    'h2',
    'h3'
  ],
  ALLOWED_ATTR: [], // No attributes are allowed for any tag
  FORBID_TAGS: ['img', 'a'] // Explicitly forbid img and anchor tags
};

// This is a generic helper function file
// In the future, if more helpers are required
// it would be best to create different files for
// different helper functions that are related

const AVG_HUMAN_WPM = 200;

export const calculateTimeToRead = (wordCount) => {
  if (wordCount <= 200) {
    return '1 min';
  }

  const minutes = wordCount / AVG_HUMAN_WPM;
  const timeToRead = Math.floor(minutes);

  return timeToRead + ' min';
};

const TEASER_LENGTH = 120;

export const createTeaser = (blogText) => {
  return blogText.substring(0, TEASER_LENGTH) + '...';
};

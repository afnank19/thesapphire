import { useLocation } from 'react-router-dom';
import { useCategoryStore } from '../../state/category';
import { useQueryStore } from '../../state/queryStore';
import { authInstance } from '../axios';

// In the current state, this only works for the homefeed,
// but it could be generalised to work for all blog requests,
// which contains lastDocId (cursor), search term, and filter/category
export const fetchBlogs = async ({ pageParam }) => {
  let endpoint = '/blogs?';

  let parameters;
  parameters = new URLSearchParams();

  if (pageParam != undefined) {
    parameters.set('lastDocId', pageParam);
  }

  if (useCategoryStore.getState().activeCategory != 'Latest') {
    parameters.set('filter', useCategoryStore.getState().activeCategory);
    console.log('New categories');
  }

  if (useQueryStore.getState().searchQuery != '') {
    parameters.set('search', useQueryStore.getState().searchQuery);
  }

  console.log(pageParam);
  console.log('HITTING: ' + endpoint + parameters.toString());
  const response = await authInstance.get(endpoint + parameters.toString());

  console.log(response.data);
  return response.data;
};

export const fetchABlogById = async (blogId) => {
  // console.log(blogId);
  const response = await authInstance.get(`/blogs/${blogId}`);

  // console.log(response.data);
  return response.data;
};

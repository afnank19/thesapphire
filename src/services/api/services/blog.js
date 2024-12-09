import { useCategoryStore } from '../../state/category';
import { authInstance } from '../axios';

// In the current state, this only works for the homefeed,
// but it could be generalised to work for all blog requests,
// which contains lastDocId (cursor), search term, and filter/category
export const fetchBlogs = async ({ pageParam }) => {
  console.log(pageParam);
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

  console.log(endpoint);
  console.log(parameters.toString());
  const response = await authInstance.get(endpoint + parameters.toString());

  console.log(response.data);
  return response.data;
};

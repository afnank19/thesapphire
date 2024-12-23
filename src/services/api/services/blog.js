import { useAuthStore } from '../../state/authStore';
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
  }

  if (useQueryStore.getState().searchQuery != '') {
    parameters.set('search', useQueryStore.getState().searchQuery);
  }

  // console.log(pageParam);
  // console.log('HITTING: ' + endpoint + parameters.toString());
  const response = await authInstance.get(endpoint + parameters.toString());

  return response.data;
};

export const fetchABlogById = async (blogId) => {
  const response = await authInstance.get(`/blogs/${blogId}`);

  return response.data;
};

export const postABlog = async (blog) => {
  const authorId = useAuthStore.getState().id;
  blog = { authorId: authorId, ...blog };

  const response = await authInstance.post('/blogs', blog);

  return response;
};

// This needs to be paginated
export const getBlogByAUser = async ({ pageParam }) => {
  console.log(pageParam);

  let endpoint = `/users/${pageParam.userId}/blogs`;

  if (pageParam.lastDocId != undefined) {
    endpoint += `?lastDocId=${pageParam.lastDocId}`;
  }

  console.log('HITTING ' + endpoint);
  const response = await authInstance.get(endpoint);

  console.log(response.data);
  return response.data;
};

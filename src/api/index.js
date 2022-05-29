import axios from 'axios';

const API = axios.create({ baseURL: 'https://trainee--application-server.herokuapp.com/posts' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`https://trainee--application-server.herokuapp.com/posts/${id}`);
export const fetchPosts = (page) => API.get(`https://trainee--application-server.herokuapp.com/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`https://trainee--application-server.herokuapp.com/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('https://trainee--application-server.herokuapp.com/posts', newPost);
export const likePost = (id) => API.patch(`https://trainee--application-server.herokuapp.com/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`https://trainee--application-server.herokuapp.com/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`https://trainee--application-server.herokuapp.com/posts/${id}`);

export const signIn = (formData) => API.post('https://trainee--application-server.herokuapp.com/user/signin', formData);
export const signUp = (formData) => API.post('https://trainee--application-server.herokuapp.com/user/signup', formData);

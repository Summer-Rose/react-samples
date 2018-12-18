import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());
//   //pulls off userId and gets only uniqe ones
//   const userIds = _.uniq(_.map(getState().posts, 'userId'));
//   userIds.forEach(id => dispatch(fetchUser(id)));
// };

//optional compact version
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

//shortened USING es 2016
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};




//one solution using memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });


// export const (fetchPosts) = () => {
//   return async (dispatch, getState) => {
//     const response = await jsonplaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   }
// };

//wrong - why???
//this doesn't return plain javascript object
//this code is not - after it goes through babel
//and it converted to es 2015 typicode
//async await syntax makes it not return just function
//action creator does not return action, but returns requests
//returns a request object not a plain object

// export const fetchPosts = async () => {
//   const response = await jsonplaceholder.get('/posts');
//
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };
//also no good! this code will return a promise
// but not the actual data so by the time it\
//gets to the reducer, the data wont be there yet
// export const fetchPosts = () => {
//   const promise = jsonplaceholder.get('/posts');
//
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };

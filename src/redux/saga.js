import { call, takeEvery, put } from 'redux-saga/effects';
import { getPosts, updatePost, deletePost } from './slices/postSlice';
import axios from 'axios';
import { sagaActions } from './sagaActions';

export function* getPostData() {
  try {
    let result = yield call(() =>
      axios.get('https://jsonplaceholder.typicode.com/posts')
    );
    yield put(getPosts(result.data));
  } catch (error) {
    yield put({ type: 'POST_FETCH_FAILED' });
  }
}

export function* updatePostData(payload) {
  try {
    let result = yield call(() =>
      axios.put(
        `https://jsonplaceholder.typicode.com/posts/${payload.post.id}`,
        payload.post
      )
    );
    yield put(updatePost(result.data));
  } catch (error) {
    yield put({ type: 'POST_UPDATE_FAILED' });
  }
}

export function* deletePostData(payload) {
  try {
    let result = yield call(() =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload.id}`)
    );
    yield put(deletePost(result.data));
  } catch (error) {
    yield put({ type: 'POST_DELETE_FAILED' });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.GET_POSTS, getPostData);
  yield takeEvery(sagaActions.UPDATE_POST, updatePostData);
  yield takeEvery(sagaActions.DELETE_POST, deletePostData);
}

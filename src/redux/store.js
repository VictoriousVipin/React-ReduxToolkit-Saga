import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import posts from './slices/postSlice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    posts: posts,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;

import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { sagaActions } from './redux/sagaActions';
import '../style.scss';

export default function App() {
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.GET_POSTS });
  }, []);

  return (
    <>
      <h1>ReduxToolkit and Saga Example with ReactJS</h1>
      <div className="post-wrapper">
        {posts.map((post, i) => (
          <div key={post.id} className="post-container">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <div className="edit-cta">
              <button
                className="button edit"
                onClick={() =>
                  dispatch({ type: sagaActions.UPDATE_POST, post })
                }
              >
                UPDATE
              </button>
            </div>
            <div className="delete-cta">
              <button
                className="button delete"
                onClick={() =>
                  dispatch({ type: sagaActions.DELETE_POST, id: post.id })
                }
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

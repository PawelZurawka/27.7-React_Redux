import React from 'react';
import './Comment.css';

const Comment = ({
  text,
  votes,
  id,
  removeComment,
  thumbUpComment,
  thumbDownComment
}) => (
  <li className='comment'>
    <span className='text'>{text}</span> <span>votes: {votes}</span>
    <button className='btn' onClick={() => thumbUpComment(id)}>
      Thumb up
    </button>
    <button className='btn' onClick={() => thumbDownComment(id)}>
      Thumb down
    </button>
    <button className='btn' onClick={() => removeComment(id)}>
      Remove
    </button>
  </li>
);

export default Comment;

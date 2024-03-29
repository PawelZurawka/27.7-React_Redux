import React from 'react';
import Comment from './CommentContainer';
import './list.css';

const CommentsList = ({ comments }) => (
  <ul className='list'>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

export default CommentsList;

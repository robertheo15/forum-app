import React from 'react';
import ActionButton from '../action/ActionButton';

const CommentItem = () => (
  <div className="comment-item">
    <header className="comment-item__header">
      <div className="comment-item__owner-info">
        <img src="https://ui-avatars.com/api/?name=reviewer&background=random" alt="adsd" />
        <p>reviewer</p>
      </div>
      <p className="posted-at">3 jam lalu</p>
    </header>
    <p>Mantap!</p>
    <footer>
      <ActionButton />
    </footer>
  </div>
);

export default CommentItem;

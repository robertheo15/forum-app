/* eslint-disable react/prop-types */
import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';
import postedAt from '../../utils';

const ThreadFooter = ({ user, createdAt }) => (
  <footer className="thread-item__footer">
    <ActionButton />
    <p className="thread-item__total-comments">
      <BiCommentDetail />
      0
    </p>
    <p>{postedAt(createdAt)}</p>
    <p className="thread-item__owner">
      Dibuat oleh&nbsp;
      <strong>{user.name}</strong>
    </p>
  </footer>
);

export default ThreadFooter;

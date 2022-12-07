import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/thread/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <ThreadInput onCreate={onCreate} />
  );
};

export default AddPage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetailHeader from '../components/thread/ThreadDetailHeader';
import ThreadDetailContent from '../components/thread/ThreadDetailContent';
import ThreadDetailFooter from '../components/thread/ThreadDetailFooter';
import ThreadDetailComment from '../components/thread/ThreadDetailComment';
import { asyncReceiveThreadDetail, asyncAddComment } from '../states/detailThread/action';

const DetailPage = () => {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCreateComment = ({ content }) => {
    dispatch(asyncAddComment({ id, content }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!threadDetail) {
    return null;
  }
  return (
    <section className="detail-page">
      <ThreadDetailHeader detail={threadDetail} />
      <ThreadDetailContent detail={threadDetail} />
      <ThreadDetailFooter detail={threadDetail} />
      <ThreadDetailComment
        onCreateComment={onCreateComment}
        authUser={authUser}
        detail={threadDetail}
      />
    </section>
  );
};
export default DetailPage;

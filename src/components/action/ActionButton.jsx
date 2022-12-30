import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FcLike, FcDislike } from 'react-icons/fc';
import { userDTO } from '../../utils/dto';

const Container = styled.button`
    align-items: center;
    background-color: initial;
    border: 0;
    cursor: pointer;
    display: flex;
    svg {
      font-size: 18px;
      margin-right: 4px;
    }
`;

const ActionButton = ({
  id, type, count, likeOrDislike, authUser,
}) => {
  if (authUser === null || authUser === undefined) {
    return (
      <Container
        type="button"
        onClick={() => alert('You must be logged in to vote.')}
      >
        {
          type === 'like' ? <FcLike />
            : <FcDislike />
        }
        <span>{count}</span>
      </Container>
    );
  }
  return (
    <Container
      type="button"
      onClick={() => likeOrDislike({ id })}
    >
      {
        type === 'like' ? <FcLike />
          : <FcDislike />
      }
      <span>{count}</span>
    </Container>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string,
  count: PropTypes.number,
  likeOrDislike: PropTypes.func,
  type: PropTypes.string,
  authUser: PropTypes.shape(userDTO),
};

export default ActionButton;

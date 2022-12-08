import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = ({ onCreateComment }) => {
  const [content, setValue] = React.useState('');

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  return (
    <form className="comment-input">
      <div className="comment-input__field" contentEditable onInput={onChange} />
      <button type="button" onClick={() => onCreateComment({ content })}>Kirim</button>
    </form>
  );
};

CommentInput.propTypes = {
  onCreateComment: PropTypes.func.isRequired,
};
export default CommentInput;

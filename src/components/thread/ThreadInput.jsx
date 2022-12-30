import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const ThreadInput = ({ onCreate }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setValue] = React.useState('');

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };
  return (
    <div className="new-thread-page">
      <h2>Buat Diskusi Baru</h2>
      <form className="new-thread-input">
        <input type="text" placeholder="Judul" value={title} onChange={onTitleChange} />
        <input type="text" placeholder="Kategori" value={category} onChange={onCategoryChange} />
        <div
          className="input-body"
          contentEditable
          onInput={onChange}
          data-testid="input-body"
        />
        <button type="button" onClick={() => onCreate({ title, category, body })}>Buat</button>
      </form>
    </div>
  );
};

ThreadInput.propTypes = {
  onCreate: PropTypes.func,
};
export default ThreadInput;

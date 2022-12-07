/* eslint-disable react/prop-types */
import React from 'react';
import useInput from '../../hooks/useInput';

const ThreadInput = ({ onCreate }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="new-thread-page">
      <h2>Buat Diskusi Baru</h2>
      <form className="new-thread-input">
        <input type="text" placeholder="Judul" value={title} onChange={onTitleChange} />
        <input type="text" placeholder="Kategori" value={category} onChange={onCategoryChange} />
        <textarea className="input-body" type="text" value={body} onChange={onBodyChange} />
        {/* <div
          className="input-body"
          contentEditable
          onInput={onBodyChange}
        /> */}
        <button type="button" onClick={() => onCreate({ title, category, body })}>Buat</button>
      </form>
    </div>
  );
};

export default ThreadInput;

import React from 'react';

const ThreadInput = () => (
  <div className="new-thread-page">
    <h2>Buat Diskusi Baru</h2>
    <form className="new-thread-input">
      <input type="text" placeholder="Judul" />
      <input type="text" placeholder="Kategori" />
      <div className="input-body" />
      <button type="submit">Buat</button>
    </form>
  </div>
);

export default ThreadInput;

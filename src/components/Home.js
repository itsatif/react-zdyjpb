import React, { useContext, useState } from 'react';
import dataContext from '../context/context';
export default function () {
  const { add, data } = React.useContext(dataContext);
  const [flag, setFlag] = useState(true);
  const [text, setText] = useState('');
  function HandleAdd() {
    add(<p>{text}</p>);
    setText('');
  }
  return (
    <div>
      <div>
        <h1>
          Task<button onClick={() => setFlag(!flag)}>X</button>
        </h1>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write something"
      ></input>
      <button onClick={HandleAdd}>Add</button>
      {flag ? <p>Home</p> : null}
      {data}
    </div>
  );
}

import React, { useState } from 'react';
import './PostForm.css';

export default function PostForm(props) {
  const [heightState, setHeightState] = useState(true);
  const toggleHeight = () => {
    setHeightState(!heightState);
  };

  return (
    <div className="post-form__container">
      <span className="post-form__id">{props.id}</span>
      <button onClick={props.onDelete} className="post-form__delate-btn">
        Delete
      </button>
      <strong className="post-form__task_title">{props.title}</strong>
      {heightState ? null : <span>{props.body}</span>}
      <button className="post-form__toggle_Btn" onClick={toggleHeight}>
        Свернуть/Развернуть
      </button>
    </div>
  );
}

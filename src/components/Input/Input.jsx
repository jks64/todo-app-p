import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Input.css';
import PostForm from '../PostForm/PostForm';
import axios from 'axios';

export default function Input() {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [idNumber, setIdNumber] = useState(1);

  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setTasks(response.data);
  }

  const addTask = () => {
    const newTask = {
      title: nameValue,
      body: descriptionValue,
      id: idNumber,
    };
    setTasks([...tasks, newTask]);
    setNameValue('');
    setDescriptionValue('');
    setIdNumber(idNumber + 1);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <div className="input__container">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
        />
        <TextField
          value={descriptionValue}
          id="standard-basic"
          label="Description"
          variant="standard"
          onChange={(event) => setDescriptionValue(event.target.value)}
        />
        <button onClick={addTask} className="input__add-task_btn">
          Add Task
        </button>
        <button onClick={fetchPosts}>GET POSTS</button>
      </div>
      <div className="input__post-form__container">
        {tasks.map((task) => (
          <PostForm
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

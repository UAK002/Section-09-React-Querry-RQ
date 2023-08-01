import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  // const result = useMutation({
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
  });

  // console.log(result);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        {/* <button type="submit" className="btn"> */}
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;

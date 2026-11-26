import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import css from './TaskForm.module.css';

export const TaskForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const data = Object.fromEntries(formData);

    const newTask = {
      id: nanoid(),
      ...data,
      status: 'todo',
    };
    dispatch(addTask(newTask));

    evt.currentTarget.reset();
    onClose();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.field}>
        <label className={css.label} htmlFor="title-input">
          Task title
        </label>
        <input
          className={css.input}
          type="text"
          name="title"
          id="title-input"
          placeholder="Enter task title..."
          required
        />
      </div>

      <div className={css.field}>
        <label className={css.label} htmlFor="textarea-description">
          Description
        </label>
        <textarea
          className={css.textarea}
          name="description"
          id="textarea-description"
          placeholder="Describe your task..."
        />
      </div>

      <fieldset className={css.field}>
        <legend className={css.label}>Priority</legend>

        <div className={css.priorityGroup}>
          <label className={css.priorityOption}>
            <input type="radio" name="priority" value="high" />
            <span className={css.high}>High</span>
          </label>

          <label className={css.priorityOption}>
            <input type="radio" name="priority" value="medium" defaultChecked />
            <span className={css.medium}>Medium</span>
          </label>

          <label className={css.priorityOption}>
            <input type="radio" name="priority" value="low" />
            <span className={css.low}>Low</span>
          </label>
        </div>
      </fieldset>

      <div className={css.field}>
        <label className={css.label} htmlFor="date-input">
          Deadline date
        </label>
        <input
          className={css.dateInput}
          type="date"
          name="deadline"
          id="date-input"
        />
      </div>

      <button className={css.submitButton} type="submit">
        Add Task
      </button>
    </form>
  );
};

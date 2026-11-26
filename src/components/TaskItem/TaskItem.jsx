import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus } from '../../redux/tasksSlice';
import { TaskMenu } from 'components/TaskMenu/TaskMenu';
import css from './TaskItem.module.css';

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleStatusChange = newStatus => {
    dispatch(
      updateTaskStatus({
        id: task.id,
        status: newStatus,
      })
    );
  };

  return (
    <li className={css.item}>
      <div className={css.header}>
        <h3 className={css.title}>{task.title}</h3>
        <TaskMenu
          onStatusChange={handleStatusChange}
          onDeleteTask={handleDelete}
          taskStatus={task.status}
        />
      </div>

      <div className={css.content}>
        <p className={css.description}>{task.description}</p>

        <span className={`${css.priority} ${css[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <div className={css.footer}>
        <span className={css.deadline}>
          Deadline: {task.deadline || 'Not set'}
        </span>

        <span className={`${css.status} ${css[task.status]}`}>
          {task.status}
        </span>
      </div>
    </li>
  );
};

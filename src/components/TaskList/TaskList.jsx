import { useSelector } from 'react-redux';
import { selectVisibleTasks, getTasks } from '../../redux/selectors';
import { TaskItem } from 'components/TaskItem/TaskItem';
import css from './TaskList.module.css';

export const TaskList = () => {
  const allTasks = useSelector(getTasks);
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <div className={css.wrapper}>
      {allTasks.length === 0 ? (
        <div className={css.empty}>
          <h3>No tasks yet!</h3>
          <p>Your tasks will appear here once you create them.</p>
        </div>
      ) : visibleTasks.length === 0 ? (
        <div className={css.empty}>
          <h3>No matching tasks found</h3>
          <p>Try changing your search query or filters.</p>
        </div>
      ) : (
        <ul className={css.list}>
          {visibleTasks.map(item => (
            <TaskItem key={item.id} task={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

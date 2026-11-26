import { useDispatch, useSelector } from 'react-redux';
import {
  changeSearch,
  changeStatus,
  changePriority,
} from '../../redux/filtersSlice';
import { getSearch, getStatus, getPriority } from '../../redux/selectors';
import css from './TaskFilters.module.css';

export const TaskFilters = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const status = useSelector(getStatus);
  const priority = useSelector(getPriority);

  return (
    <div className={css.filters}>
      {/* Search */}
      <div className={css.searchWrapper}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search tasks..."
          name="search"
          value={search}
          onChange={evt => dispatch(changeSearch(evt.target.value))}
        />
      </div>

      {/* Status filter */}
      <div className={css.filterGroup}>
        <label className={css.label} htmlFor="status-filter">
          Status
        </label>

        <select
          className={css.select}
          id="status-filter"
          value={status}
          onChange={evt => dispatch(changeStatus(evt.target.value))}
        >
          <option value="all">All statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In progress</option>
          <option value="done">Completed</option>
        </select>
      </div>

      {/* Priority filter */}
      <div className={css.filterGroup}>
        <label className={css.label} htmlFor="priority-filter">
          Priority
        </label>

        <select
          className={css.select}
          id="priority-filter"
          value={priority}
          onChange={evt => dispatch(changePriority(evt.target.value))}
        >
          <option value="all">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
};

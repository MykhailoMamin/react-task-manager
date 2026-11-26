import { useEffect } from 'react';
import { TaskForm } from 'components/TaskForm/TaskForm';
import css from './TaskModal.module.css';

export const TaskModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={onClose} className={css.backdrop}>
      <div onClick={evt => evt.stopPropagation()} className={css.modal}>
        <div className={css.header}>
          <h2 className={css.title}>Create new task</h2>

          <button
            aria-label="Close modal"
            className={css.closeButton}
            type="button"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div>
          <TaskForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

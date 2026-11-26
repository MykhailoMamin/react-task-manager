import { useState, useRef, useEffect } from 'react';
import {
  MoreHorizontal,
  ChevronDown,
  Circle,
  Clock3,
  CircleCheck,
  Trash2,
  Check,
} from 'lucide-react';
import css from './TaskMenu.module.css';

const statuses = [
  { value: 'todo', label: 'To Do', Icon: Circle },
  { value: 'in-progress', label: 'In progress', Icon: Clock3 },
  { value: 'done', label: 'Completed', Icon: CircleCheck },
];

export const TaskMenu = ({ onStatusChange, taskStatus, onDeleteTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleMouseDown = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsStatusOpen(false);
      }
    };

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsStatusOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    setIsStatusOpen(false);
  };

  const changeStatus = status => {
    onStatusChange(status);
    setIsStatusOpen(false);
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDeleteTask();
    setIsOpen(false);
    setIsStatusOpen(false);
  };

  return (
    <div ref={menuRef} className={css.menu}>
      <button
        className={css.trigger}
        type="button"
        onClick={toggleMenu}
        aria-label="Task options"
        aria-expanded={isOpen}
      >
        <MoreHorizontal size={21} />
      </button>

      {isOpen && (
        <div className={css.dropdown}>
          <button
            type="button"
            className={css.menuItem}
            onClick={() => setIsStatusOpen(prev => !prev)}
            aria-expanded={isStatusOpen}
          >
            <span>Change status</span>
            <ChevronDown
              size={16}
              className={isStatusOpen ? css.rotated : ''}
            />
          </button>

          {isStatusOpen && (
            <div className={css.statusList}>
              {statuses.map(({ value, label, Icon }) => (
                <button
                  key={value}
                  type="button"
                  className={`${css.statusOption} ${
                    taskStatus === value ? css.active : ''
                  }`}
                  onClick={() => changeStatus(value)}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                  {taskStatus === value && <Check size={15} />}
                </button>
              ))}
            </div>
          )}

          <div className={css.divider} />

          <button
            type="button"
            className={`${css.menuItem} ${css.deleteButton}`}
            onClick={handleDelete}
          >
            <Trash2 size={16} />
            <span>Delete task</span>
          </button>
        </div>
      )}
    </div>
  );
};

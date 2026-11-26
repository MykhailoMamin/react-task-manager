import { StatsList } from 'components/StatsList/StatsList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskFilters } from 'components/TaskFilters/TaskFilters';
import { useState } from 'react';
import css from './HomePage.module.css';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className={css.page}>
      <section className={css.hero}>
        <h1 className={css.title}>My Workspace</h1>
        <p className={css.description}>
          Manage your tasks and stay productive.
        </p>
      </section>
      <section className={css.section}>
        <ul className={css.stats}>
          <StatsList />
        </ul>
      </section>
      <section className={css.section}>
        <h2>My Tasks</h2>
        <button
          type="button"
          className={css.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          Add Task
        </button>
        {isModalOpen && <TaskModal onClose={() => setIsModalOpen(false)} />}
        <TaskFilters />
      </section>
      <section className={css.section}>
        <TaskList />
      </section>
    </main>
  );
};

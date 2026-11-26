import { Outlet, Link } from 'react-router-dom';
import { CheckCheck } from 'lucide-react';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" className={css.logo}>
            <CheckCheck size={24} />
            <h1 className={css.title}>TaskFlow</h1>
          </Link>
        </nav>
      </header>
      <div className={css.container}>
        <Outlet />
      </div>
    </>
  );
};

import css from './StatsCard.module.css';

export const StatsCard = ({ id, title, value }) => {
  return (
    <li className={css.card}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.value}>{value}</p>
    </li>
  );
};

import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
import { StatsCard } from 'components/StatsCard/StatsCard';

export const StatsList = () => {
  const tasks = useSelector(getTasks);

  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter(
    item => item.status === 'in-progress'
  ).length;
  const completedTasks = tasks.filter(item => item.status === 'done').length;
  const completionRate =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const stats = [
    { id: 1, title: 'All tasks', value: totalTasks },
    { id: 2, title: 'In progress', value: inProgressTasks },
    { id: 3, title: 'Completed', value: completedTasks },
    {
      id: 4,
      title: 'Completion Rate',
      value: `${Math.round(completionRate)}%`,
    },
  ];

  return stats.map(item => (
    <StatsCard
      key={item.id}
      id={item.id}
      title={item.title}
      value={item.value}
    />
  ));
};

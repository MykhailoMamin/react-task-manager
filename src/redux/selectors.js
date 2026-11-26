// Tasks
export const getTasks = state => state.tasks;

// Filters
export const getSearch = state => state.filters.search;
export const getStatus = state => state.filters.status;
export const getPriority = state => state.filters.priority;

export const selectVisibleTasks = state => {
  const tasks = getTasks(state);
  const search = getSearch(state);
  const status = getStatus(state);
  const priority = getPriority(state);

  return tasks.filter(item => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === 'all' || item.status === status;

    const matchesPriority = priority === 'all' || item.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });
};

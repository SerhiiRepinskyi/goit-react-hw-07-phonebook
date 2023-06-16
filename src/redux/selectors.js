export const selectorContacts = state => {
  // Сортування контактів (state.contacts) за алфавітом
  const sortedContacts = [...state.contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sortedContacts;
};

export const selectorFilter = state => state.filter;

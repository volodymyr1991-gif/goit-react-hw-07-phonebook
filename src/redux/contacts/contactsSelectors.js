const getContacts = (state) => state.phonebook.contacts;

const getLoading = (state) => state.phonebook.isLoadind;

const getFilter = (state) => state.phonebook.filter;

const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const getContactById = (state, id) => {
    const contacts = getContacts(state);
    return contacts.find((contact) => contact.id === id);
  };

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
};

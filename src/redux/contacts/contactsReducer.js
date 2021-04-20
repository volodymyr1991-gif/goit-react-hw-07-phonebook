import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  contactRequest,
  contactSuccess,
  contactError,
  removeContacts,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsAction";

const onAddContact = (state, action) => {
  const { name, id, number } = action.payload;
  return [...state, { name, id, number }];
};
const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [removeContactSuccess]: onRemoveContact,
  [contactSuccess]: onAddContact,
  [removeContacts]: onRemoveContact,
});

const isLoadind = createReducer(false, {
  [contactRequest]: () => true,
  [contactSuccess]: () => false,
  [contactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [removeContactRequest]: () => false,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

// const error = createReducer(null);

export default combineReducers({
  contacts,
  filter,
  isLoadind,
});

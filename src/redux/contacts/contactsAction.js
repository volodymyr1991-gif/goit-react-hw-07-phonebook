// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const contactRequest = createAction('addRequest');
const contactSuccess = createAction('addSuccess');
const contactError = createAction('addError');



const fetchContactsRequest = createAction('fetchRequest');
const fetchContactsSuccess = createAction('fetchSuccess')
const fetchContactsError = createAction('fetchError');

const removeContactRequest = createAction('removeContactsRequest');
const removeContactSuccess = createAction('removeContactsSuccess');
const removeContactError = createAction('removeContactsError');



// const addToContacts = createAction("ADD_TO_CONTACTS", (name, number) => ({
//   payload: {
//     contacts: {
//       name: name,
//       id: uuidv4(),
//       number: number,
//     },
//   },
// }));
const removeContacts = createAction("REMOVE_CONTACT");
const changeFilter = createAction("CHANGE_FILTER");

export {
  contactRequest,
  contactSuccess,
  contactError, 

fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  removeContacts, 
  changeFilter };
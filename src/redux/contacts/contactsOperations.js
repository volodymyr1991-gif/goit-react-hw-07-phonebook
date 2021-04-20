import axios from "axios";
import {
  contactRequest,
  contactSuccess,
  contactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsAction";

export const addToContactsDB = (name, number) => (dispatch) => {
  dispatch(contactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) => {
      dispatch(contactSuccess(response.data));
    })
    .catch((error) => dispatch(contactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError()));
};

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export default {
  addToContactsDB,
  fetchContacts,
  removeContact,
};

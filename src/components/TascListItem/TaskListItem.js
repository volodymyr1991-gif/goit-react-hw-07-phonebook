import React from "react";
import PropTypes from "prop-types";
import "../TaskList/TaskList.css";
import contactsOperations from '../../redux/contacts/contactsOperations'
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";


const TaskListItem = ({ id,number, name, removeContacts }) => {
  return (
    <li className="TaskList-item ">
      <p className="TaskList-text">
        {name}: {number}.
      </p>

      <section className="TaskList-actions">
        <button type="button" className="TaskList-button" id={id} onClick={()=>removeContacts(id)}>
      
        </button>
      </section>
    </li>
  );
};

TaskListItem.propTypes = {
  id: PropTypes.number,
  number: PropTypes.string,
  name: PropTypes.string.isRequired,
  removeContacts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContacts: () => {
    return dispatch(contactsOperations.removeContact(ownProps.id));
  },
});



export default connect(mapStateToProps,mapDispatchToProps)(TaskListItem);

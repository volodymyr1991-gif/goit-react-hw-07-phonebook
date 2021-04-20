import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TaskListItem from "../TascListItem/TaskListItem";
import removeContact from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import "./TaskList.css";

const TaskList = ({ visibleContact, removeContacts }) => (
  <ul className="TaskList">
    {visibleContact.map((contact) => (
      <TaskListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        removeContacts={removeContacts}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  visibleContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
  removeContacts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  visibleContact: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  removeContacts: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

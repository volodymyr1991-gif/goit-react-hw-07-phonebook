import React from "react";
import PropTypes from "prop-types";
import contactsSelectors from '../../redux/contacts/contactsSelectors'
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsAction";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className='ContactForm'>
      <label className='ContactForm-label'>
        Find contact by name
        <input className='ContactForm-input'
          name="filter"
          type="text"
          value={value}
          placeholder="Пошук"
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = {
  onChangeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

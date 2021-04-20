// import SignAppForm from './components/SignAppForm/SignAppForm';
import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./СontactForm/ContactForm";
import Filter from "./filter/Filter";
import TaskList from "./TaskList/TaskList";
import Layout from "./Layout/Layout";
import contactsOperations from "../redux/contacts/contactsOperations";
import Loader from './Spiner/Spiner'
import contactsSelectors from '../redux/contacts/contactsSelectors'

// import { v4 as uuidv4 } from "uuid";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
   console.log(this.props.isLoadingContact);
  }
 
  render() {
    
    return (
      <>
        <Layout>
         
          <h1>Phonebook</h1>

          <ContactForm addToContacts={this.addToContacts} />

          <h2>Contacts</h2>

          <Filter />
          {this.props.isLoadingContact && Loader()}
          <TaskList
         
          />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state =>({
  isLoadingContact: contactsSelectors.getLoading(state),

  
})

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


import React from 'react';
import './styles.css';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';


function App() {
  return (
    <>
    <nav className="navbar navbar-light bg-light border-bottom fixed-top" role="navigation">
      <a className="navbar-brand" href="/">
        <i className="fa fa-user"></i>
        <span>Contacts</span>
      </a>
    </nav>
  
    <div className="container-md">
      <div className="row">
        <ContactList></ContactList>
        <ContactDetails></ContactDetails>
      </div>
    </div>
    </>
  );
}

export default App;

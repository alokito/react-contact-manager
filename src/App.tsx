import React, { useEffect, useState } from 'react';
import './styles.css';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import { api } from './web-api';
import { Contact } from './types';
import { useLoaderData } from 'react-router';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState<Array<Contact>>([]);
  const selectedContact = useLoaderData() as Contact|undefined;

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    api.getContactList()
      .then(
        (result) => {
          setIsLoaded(true);
          setContacts(result);
        }
      )
  }, []);
  
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
        <ContactList contacts={contacts} selectedId={selectedContact?selectedContact.id:null}></ContactList>
        <ContactDetails contact={selectedContact?selectedContact:null}></ContactDetails>
      </div>
    </div>
    </>
  );
}

export default App;

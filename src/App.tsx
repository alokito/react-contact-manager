import React, { MouseEventHandler, useEffect, useState } from 'react';
import './styles.css';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import { api } from './web-api';
import { Contact } from './types';
import { useLoaderData, useParams } from 'react-router';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState<Array<Contact>>([]);
  
  const [selectedContact, setSelectedContact] = useState<Contact|null>(null);
  
  const params = useParams() as {contactId?:string};

  
  const saveContact =(contact:Contact) => {
    setIsLoading(true)
    api.saveContact(contact).then(() => {
      const newContacts = contacts.map(c => c.id == contact.id?contact:c)
      setContacts(newContacts)
      setIsLoading(false)
    })
  }


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    api.getContactList()
      .then(
        (result) => {
          setIsLoading(false);
          setContacts(result);
        }
      )
  }, []);


  useEffect(() => {
    if (params.contactId) {
      setIsLoading(true);
      api.getContactDetails(parseInt(params.contactId!, 10))
      .then(
        (result) => {
          setSelectedContact(result);
          setIsLoading(false);
        }
      )
    } else {
      setSelectedContact(null);
      setIsLoading(false);
    }
  }, [params.contactId]);  


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
        <ContactDetails key={selectedContact?selectedContact.id:null} 
          contact={selectedContact?selectedContact:null}
          saveContact={saveContact}
          isLoading={isLoading}
        />
      </div>
    </div>
    </>
  );
}

export default App;

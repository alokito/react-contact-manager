import { FC } from "react";
import { Link } from "react-router-dom";
import { Contact } from "./types";

interface ContactListProps {
    contacts: Array<Contact>;
    selectedId: number | null;
}
const ContactList:FC<ContactListProps> = ({contacts, selectedId}) => {
    return (<div className="col-sm-5 col-md-4">
        <div className="contact-list">
      <div className="list-group">
        {contacts.map(c => <ContactCard key ={c.id} contact={c} selectedId={selectedId}></ContactCard>)}
      </div>
    </div>

    </div>);
}

interface ContactCardProps {
    contact: Contact;
    selectedId: number | null;
}
const ContactCard:FC<ContactCardProps> = ({contact, selectedId}) => {
    return (<Link to={`/contacts/${contact.id}`}    
          className={`list-group-item list-group-item-action ${contact.id === selectedId ? 'active' : ''}`}
        >
          <strong>{contact.firstName} {contact.lastName}</strong><br/>
          <small>{contact.email}</small>
        </Link>);
}

export default ContactList;
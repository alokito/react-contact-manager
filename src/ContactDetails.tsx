import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react"
import { Contact } from "./types";
import { api } from "./web-api";

interface NoSelectionProps {
    message: string;
}
const NoSelection: FC<NoSelectionProps> = ({message}) => (
    <div className="no-selection text-center">
        <h4>{message}</h4>
    </div>
);

interface EditableRowProps {
    placeholder: string;
    value: string;
    label: string;
    handleChange:ChangeEventHandler<HTMLInputElement>
}
const EditableRow:FC<EditableRowProps> = ({placeholder, value, label, handleChange}) => {
    return <div className="form-group row">
    <label className="col-md-3 col-form-label">{label}</label>
    <div className="col-md-9">
      <input type="text" placeholder={placeholder} onChange={handleChange} className="form-control" value={value}/>
    </div>
  </div>
}

interface ContactDetailsProps {
    contact: Contact | null;
    saveContact: (contact:Contact) => void;
    isLoading: boolean;
}
const ContactDetails:FC<ContactDetailsProps> = ({contact, saveContact, isLoading}) => {
    const [editedContact, setEditedContact] = useState(contact);

    if (editedContact === null) {
        return <NoSelection message="Please Select a Contact."></NoSelection>;
    }


    const makeChangeHandler = (field: keyof Contact ) => {
        const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
            setEditedContact({...editedContact, [field]:event.target.value });
        };  
        return handleChange;    
    }

    
    const handleSave:MouseEventHandler<HTMLButtonElement> =(e) => {
        saveContact(editedContact)
    }

    const canSave =  editedContact.firstName && editedContact.lastName && !isLoading;

    return (
        <div className="col-sm-7 col-md-8">
    <div className="card">
    <div className="card-header text-white bg-primary">
      Profile
    </div>
    <div className="card-body">
      <form>
        <EditableRow 
            placeholder="first name" 
            label="First Name" 
            value={editedContact.firstName} 
            handleChange={makeChangeHandler('firstName')}
        />
        
        <EditableRow 
            placeholder="last name" 
            label="Last Name" 
            value={editedContact.lastName}
            handleChange={makeChangeHandler('lastName')}
            />

        <EditableRow 
            placeholder="email" 
            label="Email" 
            value={editedContact.email}
            handleChange={makeChangeHandler('email')}
        />

        <EditableRow
            placeholder="phone number"
            label="Phone Number" 
            value={editedContact.phoneNumber}
            handleChange={makeChangeHandler('phoneNumber')}
        />

      </form>
      <div>
        <button className="btn btn-success float-right" onClick={handleSave} disabled={!canSave}>Save</button>
      </div>
    </div>
    </div>
  </div>);
}

export default ContactDetails;
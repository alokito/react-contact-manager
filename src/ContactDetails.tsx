import { ChangeEventHandler, FC, useState } from "react"
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
    defaultValue: string;
    label: string;
}
const EditableRow:FC<EditableRowProps> = ({placeholder, defaultValue, label}) => {

    const [value, setValue] = useState(defaultValue);

    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value );
    };
    return <div className="form-group row">
    <label className="col-md-3 col-form-label">{label}</label>
    <div className="col-md-9">
      <input type="text" placeholder={placeholder} onChange={handleChange} className="form-control" value={value}/>
    </div>
  </div>
}

interface ContactDetailsProps {
    contact: Contact | null;
}
const ContactDetails:FC<ContactDetailsProps> = ({contact}) => {
    if (contact === null) {
        return <NoSelection message="Please Select a Contact."></NoSelection>;
    }
    const canSave =  contact.firstName && contact.lastName && !api.isRequesting;

    return (
        <div key={contact.id} className="col-sm-7 col-md-8">
    <div className="card">
    <div className="card-header text-white bg-primary">
      Profile
    </div>
    <div className="card-body">
      <form>
        <EditableRow placeholder="first name" label="First Name" defaultValue={contact.firstName}/>
        
        <EditableRow placeholder="last name" label="Last Name" defaultValue={contact.lastName}/>

        <EditableRow placeholder="email" label="Email" defaultValue={contact.email}/>

        <EditableRow placeholder="phone number" label="Phone Number" defaultValue={contact.phoneNumber}/>

      </form>
      <div>
        <button className="btn btn-success float-right"  disabled={!canSave}>Save</button>
      </div>
    </div>
    </div>
  </div>);
}

export default ContactDetails;
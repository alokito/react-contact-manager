import { FC } from "react"
import { Contact } from "./types";

interface NoSelectionProps {
    message: string;
}
const NoSelection: FC<NoSelectionProps> = ({message}) => (
    <div className="no-selection text-center">
        <h4>{message}</h4>
    </div>
);


interface ContactDetailsProps {
    contact: Contact | null;
}
const ContactDetails:FC<ContactDetailsProps> = ({contact}) => {
    if (contact === null) {
        return <NoSelection message="Please Select a Contact."></NoSelection>;
    }
    return <NoSelection message={`You selected ${contact.firstName}`}></NoSelection>;
}

export default ContactDetails;
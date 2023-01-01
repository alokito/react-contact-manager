import { FC } from "react"

interface NoSelectionProps {
    message: string;
}
const NoSelection: FC<NoSelectionProps> = ({message}) => (
    <div className="no-selection text-center">
        <h4>{message}</h4>
    </div>
);


interface ContactDetailsProps {

}
const ContactDetails:FC<ContactDetailsProps> = () => {
    const content  = <NoSelection message="Please Select a Contact."></NoSelection>;
    return <div className="col-sm-7 col-md-8">{content}</div>;
}

export default ContactDetails;
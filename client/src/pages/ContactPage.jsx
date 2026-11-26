import { useParams } from 'react-router-dom';
import ContactsListAll from './contacts/ContactsListAll';
import ContactsListInternal from './contacts/ContactsListInternal';
import ContactsListExternal from './contacts/ContactsListExternal';

function ContactPage() {
    const { type } = useParams();
    if (type == 'team') {
        return <ContactsListInternal/>;
    }
    if (type == 'external') {
        return <ContactsListExternal/>;
    }
    return <ContactsListAll/>;
}

export default ContactPage
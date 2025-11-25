import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import SendEmail from '../Email/SendEmail';

const Contact = () => {
    return (
        <div>
            <ContactInfo></ContactInfo>
            <SendEmail></SendEmail>
        </div>
    );
};

export default Contact;
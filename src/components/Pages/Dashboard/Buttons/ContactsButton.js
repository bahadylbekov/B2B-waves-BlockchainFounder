import React from 'react';

const ContactsButton = (props) => (
    <button
        className="button col-md-4 col-lg-4 col-xl-4">
        <div className="button-card">
        <span className="contacts-icon" />
        <div className="button-info">
            <h1 className="button-title">5</h1>
            <p className="button-subtitle">Contacts</p>
        </div>
        </div>
    </button>
);

export default ContactsButton;
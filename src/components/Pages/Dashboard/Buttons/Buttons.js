import React from 'react';
import FinanceButton from './FinanceButton';
import ContractsButton from './ContractsButton';
import ContactsButton from './ContactsButton';


const Buttons = (props) => (
    <div className="button-row col-md-12 col-lg-12 col-xl-12">
        <FinanceButton 
            handleClick = {props.handleClick}/>
        <ContractsButton 
            handleClick = {props.handleClick}/>
        <ContactsButton />
    </div>
);

export default Buttons;
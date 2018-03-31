import React from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

class CreateNewButton extends React.Component {
    render() {
        return (
            <div className="dropdown-create-new">
            <DropdownButton
                bsStyle="default"
                title="Create new"
                noCaret
                id="dropdown-no-caret"
            >
            <MenuItem eventKey="1">Sale</MenuItem>
            <MenuItem eventKey="2">Purchase</MenuItem>
            <MenuItem eventKey="3">Contact</MenuItem>
            <MenuItem eventKey="4">Item</MenuItem>
            <MenuItem eventKey="5">Document</MenuItem>
            </DropdownButton>
            </div>
        );
    }
};
export default CreateNewButton;
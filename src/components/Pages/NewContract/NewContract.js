import React from 'react';
import TitleRow from './TitleRow';
import Contract from './Contract';

class NewContract extends React.Component {
    render() {
        return(
            <div className="main-container">
                <TitleRow />
                <Contract />
            </div>
        );
    } 
}

export default NewContract;
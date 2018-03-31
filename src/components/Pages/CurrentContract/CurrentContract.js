import React from 'react';
import TitleRow from './components/TitleRow';
import ContractContainer from './components/ContractContainer';

export default class CurrentContract extends React.Component {
    render() {
        return(
            <div className="main-container">
                <TitleRow />
                <ContractContainer />
            </div>
        )
    }
}
import React from 'react';
import InfoRow from './InfoRow';
import AddressRow from './AddressRow';
import ItemsTable from './ItemsTable';
import ContractTotal from './ContractTotal';
import HistoryAndEvents from './HistoryAndEvents';

export default class ContractContainer extends React.Component {
    render() {
        return (
            <div className="contract-container">
                <InfoRow />
                <AddressRow />
                <ItemsTable />
                <ContractTotal />
                <HistoryAndEvents />
            </div>
        )
    }
}
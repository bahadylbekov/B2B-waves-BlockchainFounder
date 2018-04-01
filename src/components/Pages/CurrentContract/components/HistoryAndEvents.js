import React from 'react';

export default class HistoryAndEvents extends React.Component {
    state = {
        events: [{
            changes: "Create Contract",
            date: "13.03.2018",
            user: "Leah Stevens",
            details: "Total amount of sale #14-201 is 47.8 usd",
            id: 1
        }]
    }

    render() {
        
        let rows = this.state.events.map(event =>
        {
            return <TableRow key={event.id} events={event}/>
        });

        return (
            <div  className="table">
            <h1 className="events-table-title">History and Events</h1>
            <table className="events-table">
                <TableHeader />
                <tbody>{rows}</tbody>
            </table>
            </div>
        );
    }
}

class TableHeader extends React.Component {
    render() {
         return (
            <thead className="events-table-header">
            <tr>
                <th className="events-table-header-item">Changes</th>
                <th className="events-table-header-item">Date</th>
                <th className="events-table-header-item">User</th>
                <th className="events-table-header-item">Details</th>
            </tr>
            </thead>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr className="events-table-row">
                <td className="events-table-row-item">{this.props.events.changes}</td>
                <td className="events-table-row-item">{this.props.events.date}</td>
                <td className="events-table-row-item">{this.props.events.user}</td>
                <td className="events-table-row-item">{this.props.events.details}</td>
            </tr>
        )
    }
}

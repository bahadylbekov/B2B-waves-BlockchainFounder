import React from 'react';

export default class StatementAndExpensesInfo extends React.Component {

    state = {
        data:[{
            account: "Income",
            month: "450.94",
            year: "4500.43934",
            id: 1
        }, {
            account: "Expense",
            month: "300.053",
            year: "3020.053",
            id: 2
        }, {
            account: "Net Income",
            month: "150.887",
            year: "1480.38634",
            id: 3
        }]
    }

    render() {
        
        let rows = this.state.data.map(account =>
        {
            return <TableRow key={account.id} data={account}/>
        });

        return (
            <div  className="statement col-lg-8 col-xl-8">
            <table className="statement-table">
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
            <thead className="statement-table-header">
            <tr>
                <th className="statement-header-item">Account Summary</th>
                <th className="statement-header-item">This Month, $</th>
                <th className="statement-header-item">Year to Date, $</th>
            </tr>
            </thead>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr className="statement-table-row">
                <td className="statement-table-row-item">{this.props.data.account}</td>
                <td  className="statement-table-row-item value">{this.props.data.month}</td>
                <td className="statement-table-row-item value">{this.props.data.year}</td>
            </tr>
        )
    }
}

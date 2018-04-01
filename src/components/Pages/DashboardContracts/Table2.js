import React from 'react';
import axios from 'axios';

export default class ContractsTable extends React.Component {

    state = {
        data:[]
    }


    componentDidMount() {
        const response = axios.get('http://10.0.0.104:3000/api/contracts', {
            headers: {
              'Access-Control-Allow-Origin': '*',
            }})
        .then(function (response) {
            console.log(response)
            this.state = {data: response};
          });
    }

    render() {
        
        let rows = this.state.data.map(contract =>
        {
            return <TableRow key={contract.id} data={contract}/>
        });

        return (
            <div  className="contracts col-lg-12 col-xl-12">
            <table className="contracts-table">
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
            <thead className="contracts-table-header">
            <tr>
                <th className="contracts-header-item">Number</th>
                <th className="contracts-header-item">Supplier</th>
                <th className="contracts-header-item">Item</th>
                <th className="contracts-header-item">Qty</th>
                <th className="contracts-header-item">Date</th>
                <th className="contracts-header-item">Total Price</th>
                <th className="contracts-header-item"></th>
            </tr>
            </thead>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr className="contracts-table-row">
                <td className="contracts-table-row-item main">{this.props.data.number}</td>
                <td  className="contracts-table-row-item main">
                    { this.props.data.logo.length > 0 ? 
                    <div className="item-logo-text"><span className={this.props.data.logo}/><p className="contracts-table-item-title">{this.props.data.supplier}</p></div>
                    : this.props.data.supplier }
                </td>
                <td className="contracts-table-row-item ">{this.props.data.item}</td>
                <td className="contracts-table-row-item ">{this.props.data.qty}</td>
                <td  className="contracts-table-row-item ">{this.props.data.date}</td>
                <td className="contracts-table-row-item value">{this.props.data.totalPrice}</td>
                <td className="contracts-table-row-item status">
                        { this.props.data.status == 1 ? <span className="status-paid" /> : null }
                        { this.props.data.status == 2 ? <span className="status-awaiting" /> : null }
                        { this.props.data.status == 3 ? <span className="status-overdue" /> : null }
                </td>
            </tr>
        )
    }
}

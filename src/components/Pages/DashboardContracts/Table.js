import React from 'react';

export default class ContractsTable extends React.Component {

    state = {
        data:[{
            number: "14-201",
            logo: "logo-coca-cola",
            supplier: "The Coca-Cola Company",
            item: "Aluminium can",
            qty: 10,
            date: "15/04/2018",
            totalPrice: 47.8,
            status: 1, 
            id: 1,
        }, {
            number: "12-FB1",
            logo: "logo-sberbank",
            supplier: "Sberbank Company",
            item: "Mortage Credits",
            qty: 500,
            date: "19/03/2018",
            totalPrice: 124900,
            status: 2, 
            id: 2,
        }, {
            number: "12-PC2",
            logo: "logo-pepsi",
            supplier: "Pepsi & Co",
            item: "Pepsi bottles",
            qty: 12,
            date: "03/03/2018",
            totalPrice: 32,
            status: 3, 
            id: 3,
        }, {
            number: "12-PC2",
            logo: "",
            supplier: "Pepsi & Co",
            item: "Pepsi bottles",
            qty: 12,
            date: "03/03/2018",
            totalPrice: 32,
            status: 1, 
            id: 4,
        }]
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
                <td className="contracts-table-row-item value">{this.props.data.status}</td>
            </tr>
        )
    }
}

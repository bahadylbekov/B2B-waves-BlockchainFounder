import React from 'react';

export default class ItemsTable extends React.Component {
    state = {
        items: [{
            code: "AC-201",
            item: "Alluminium can",
            description: "Using to Produce",
            qty: 10,
            unitPrice: 4.78,
            discount: "",
            amount: 47.8,
            id: 1
        }]
    }

    render() {
        
        let rows = this.state.items.map(item =>
        {
            return <TableRow key={item.id} items={item}/>
        });

        return (
            <div  className="table col-lg-12 col-xl-12">
            <table className="items-table">
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
            <thead className="item-table-header">
            <tr>
                <th className="item-table-header-item">Code</th>
                <th className="item-table-header-item">Item</th>
                <th className="item-table-header-item">Description</th>
                <th className="item-table-header-item">Qty</th>
                <th className="item-table-header-item">Unit Price</th>
                <th className="item-table-header-item">Discount</th>
                <th className="item-table-header-item">Amount</th>
            </tr>
            </thead>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr className="item-table-row">
                <td className="item-table-row-item">{this.props.items.code}</td>
                <td className="item-table-row-item">{this.props.items.item}</td>
                <td className="item-table-row-item">{this.props.items.description}</td>
                <td className="item-table-row-item">{this.props.items.qty}</td>
                <td className="item-table-row-item">{this.props.items.unitPrice}</td>
                <td className="item-table-row-item">{this.props.items.discount}</td>
                <td className="item-table-row-item">{this.props.items.amount}</td>
            </tr>
        )
    }
}

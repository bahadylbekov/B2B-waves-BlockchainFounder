import React from 'react';

export default class Difference extends React.Component {

    state = {
        data:[
            {key: "April", value: 90},
            {key: "May", value: 50},
            {key: "June", value: 130},
            {key: "July", value: 190},
            {key: "August", value: 90},
            {key: "September", value: 60}    
        ]
    }

    render() {
        
        let rows = this.state.data.map(month =>
        {
            return <TableRow key={month.key} data={month}/>
        });

        return (
            <table className="difference-table">
                <tbody>{rows}</tbody>
            </table>
        );
    }

}

class TableRow extends React.Component {
    render() {
        return (
            <tr className="difference-table-item">
                <td className="difference-table-key">{this.props.data.key}</td>
                <td  className="difference-table-value">{this.props.data.value}</td>
            </tr>
        )
    }
}

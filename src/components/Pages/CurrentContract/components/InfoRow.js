import React from 'react';

class InfoRow extends React.Component {
    state = {
        contactInfo: {
            contact: "The Coca-Cola Company",
            invoiceNumber: "14-201",
            date: "13.03.2018",
            dueDate: "15.04.2018",
            amounts: "Tax inclusive",
        }
    }
    render() {
        return(
                <div className="info-row">
                    <div className="row-item">
                        <p className="contract-info-title">Contact</p>
                        <p className="info-item">{this.state.contactInfo.contact}</p>
                    </div>
                    <div className="row-item">
                        <p className="contract-info-title">Invoice, #</p>
                        <p className="info-item">{this.state.contactInfo.invoiceNumber}</p>
                    </div>
                    <div className="row-item">
                        <p className="contract-info-title">Date</p>
                        <p className="info-item">{this.state.contactInfo.date}</p>
                    </div>
                    <div className="row-item">
                        <p className="contract-info-title">Due Date</p>
                        <p className="info-item">{this.state.contactInfo.dueDate}</p>
                    </div>
                    <div className="row-item">
                        <p className="contract-info-title">Amounts are</p>
                        <p className="info-item">{this.state.contactInfo.amounts}</p>
                    </div>
                </div>
        )
    }
}

export default InfoRow;
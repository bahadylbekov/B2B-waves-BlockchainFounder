import React from 'react';

class AddressRow extends React.Component {
    state = {
        billingAddressInfo: {
            address: "1820 Santa Monica Blvd",
            city: "Los Angeles",
            state: "California",
            zipCode: "90404",
            country: "United States"
        },
        postalAddressInfo: {
            address: "21301 Ventura Blvd",
            city: "Los Angeles",
            state: "California",
            zipCode: "91364",
            country: "United States"
        }
    }
    render() {
        return(
            <div className="info-row">
                <div className="row-item">
                    <p className="contract-info-title">Billing Address</p>
                    <p className="info-item">{this.state.billingAddressInfo.address}</p>
                    <p className="info-item">{this.state.billingAddressInfo.city}</p>
                    <p className="info-item">{this.state.billingAddressInfo.state}</p>
                    <p className="info-item">{this.state.billingAddressInfo.zipCode}</p>
                    <p className="info-item">{this.state.billingAddressInfo.country}</p>
                </div>
                <div className="row-item">
                    <p className="contract-info-title">Postal Address</p>
                    <p className="info-item">{this.state.postalAddressInfo.address}</p>
                    <p className="info-item">{this.state.postalAddressInfo.city}</p>
                    <p className="info-item">{this.state.postalAddressInfo.state}</p>
                    <p className="info-item">{this.state.postalAddressInfo.zipCode}</p>
                    <p className="info-item">{this.state.postalAddressInfo.country}</p>
                </div>
            </div>
        )
    }
}

export default AddressRow;
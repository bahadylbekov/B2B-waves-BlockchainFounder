import React from 'react';
import NewContractTotal from './NewContractTotal';

class Contract extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            company: "",
            invoice: "",
            date: "",
            dueDate: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            code: "",
            item: "",
            description: "",
            qty: "",
            unitPrice: "",
            discount: "",
            amount: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/contracts',
            type: "POST",
            data: this.state,
            success: alert(true),
          });
        }
             render() {
        return (
            <div className="contract-container">
                <form>
                <div  className="newcontract-info-row">
                    <div className="newcontract-row-item">
                        <p className="newcontract-info-title">Contact</p>
                        <div className="input-contact">
                            <input type="text" name="company" placeholder="Company Name" onChange={this.handleChange} className="input-contact"/>
                        </div>
                    </div>
                    <div className="newcontract-row-item">
                        <p className="newcontract-info-title">Invoice #</p>
                        <div className="input-contact">
                            <input type="text" name="invoice"  placeholder="Invoice Number" onChange={this.handleChange} className="input-contact" />
                        </div>
                    </div>
                    <div className="newcontract-row-item">
                        <p className="newcontract-info-title">Amount</p>
                        <div className="input-contact">
                            <input type="text" name="amount" placeholder="Amount of dollars" onChange={this.handleChange} className="input-contact" />
                        </div>
                    </div>
                    <div className="newcontract-row-item">
                        <p className="newcontract-info-title">Waves account</p>
                        <div className="input-contact">
                            <input type="text" name="account" placeholder="Waves address" onChange={this.handleChange} className="input-contact"/>
                        </div>
                    </div>
                </div>

                <div className="newcontract-info-row">
                    <div className="newcontract-row-item">
                        <div className="newcontract-address-title">
                            <p className="newcontract-info-title">Billing Address</p>
                        </div>
                        <div className="newcontract-address-form">
                            <div className="input-contact">
                                <input type="text" placeholder="Address" name="address" onChange={this.handleChange} className="input-address" />
                            </div>
                            <div className="input-contact">
                                <input type="text" placeholder="City" name="city" onChange={this.handleChange} className="input-address"/>
                            </div>
                            <div className="input-contact">
                                <input type="text" placeholder="State" name="state" onChange={this.handleChange} className="input-address"/>
                            </div>
                            <div className="input-contact">
                                <input type="text" placeholder="Zip Code" name="zip" onChange={this.handleChange} className="input-address" />
                            </div>
                            <div className="input-contact">
                                <input type="text" placeholder="Country" name="country" onChange={this.handleChange} className="input-address"/> 
                            </div>
                        </div>
                        <div className="newcontract-address-form">
                            <div className="newcontract-info-title">
                                <p className="newcontract-info-title">Destination</p>
                            </div>
                            <div className="newcontract-address-form">
                                <div className="input-contact">
                                    <input type="text" placeholder="Destination" name="destination" onChange={this.handleChange} className="input-address" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <table className="items-table">
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
                        <tr className="item-table-row">
                            <td className="item-table-row-input"><input className="code" type="text" name="code" onChange={this.handleChange} /></td>
                            <td className="item-table-row-input"><input className="item" type="text" name="item" onChange={this.handleChange} /></td>
                            <td className="item-table-row-input"><input className="description" type="text" name="description" onChange={this.handleChange} /></td>
                            <td className="item-table-row-input"><input className="qty" type="int" name="qty"  onChange={this.handleChange}/></td>
                            <td className="item-table-row-input"><input className="prices" type="int" name="unitPrice" onChange={this.handleChange} /></td>
                            <td className="item-table-row-input"><input className="prices" type="int" name="discount" onChange={this.handleChange} /></td>
                            <td className="item-table-row-input"><input className="prices" type="int" name="amount"  onChange={this.handleChange}/></td>
                        </tr>
                    </table>
                </div>
                </form>
                <NewContractTotal />
                <button
                    onClick={() => {this.handleSubmit();return false;}} className="submit-button" >Submit
                </button>
                <div className="clear"/>
          </div>
        );
      }
}

export default Contract;
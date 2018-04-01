import React from 'react';
import Axios from 'axios';

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
        const response = await axios.post('/api/contracts', this.state );
        console.log(response);
        event.preventDefault();
      }    
    render() {
        return (
            <div className="new-contract">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label className="label-contact">
                    Contact:<br/>
                    <input type="text" name="company" placeholder="Company Name" class="input-contact" onChange={this.handleChange}/>
                    </label>

                    <label class="label-contact">
                    Invoice #:<br/>
                    <input type="text" name="invoice"  placeholder="Invoice" class="input-contact" onChange={this.handleChange}/>
                    </label>
                    
                    <label class="label-contact">
                    Date:<br/>
                    <input type="text" name="date" placeholder="Date" class="input-contact" onChange={this.handleChange}/>
                    </label>

                    <label class="label-contact">
                    Due Date:<br/>
                    <input type="text" name="dueDate" placeholder="DueDate" class="input-contact" onChange={this.handleChange}/>
                    </label>

                    <label class="label-contact">
                    Amounts are:<br/>
                    <input type="text" name="Amounts"  value="Tax Inclusive" class="input-contact" onChange={this.handleChange}/>
                    </label>
                </div>

                <div className="adress1">
                    <div className="billing-address-title">
                        Billing Address 
                    </div>

                    <div className="billing-address-form">
                        <label class="label-contact">
                        <input type="text" placeholder="address" name="address" class="input-contact" onChange={this.handleChange}/>
                        </label><br/>
                    
                        <label class="label-contact">
                        <input type="text" placeholder="city" name="city" class="input-contact" onChange={this.handleChange}/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="state" name="state" class="input-contact" onChange={this.handleChange}/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="zip" name="zip" class="input-contact" onChange={this.handleChange}/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="country" name="country" class="input-contact" onChange={this.handleChange}/> 
                        </label><br/>
                    </div>
                </div>
                <br/>
                <table className="newcontract-table">
                    <tr className="newcontract-table-header">
                        <td className="newcontract-table-header-item">Code</td>
                        <td className="newcontract-table-header-item">Item</td>
                        <td className="newcontract-table-header-item">Description</td>
                        <td className="newcontract-table-header-item">Qty</td>
                        <td className="newcontract-table-header-item">Unit Price</td>
                        <td className="newcontract-table-header-item">Discount</td>
                        <td className="newcontract-table-header-item">Amount</td>
                    </tr>
                    <tr className="newcontract-table-row">
                        <td className="newcontract-table-row-item"><input type="text" name="code" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="text" name="item" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="text" name="description" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="qty" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="unitPrice" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="discount" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="amount" onChange={this.handleChange} /></td>
                    </tr>
                </table>
                    <input type="submit" value="Submit" id="button-contact" />
                </form>
          </div>
        );
      }
}

export default Contract;
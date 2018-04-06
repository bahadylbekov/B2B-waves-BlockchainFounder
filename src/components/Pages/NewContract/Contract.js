import React from 'react';

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
            <div className="new-contract">
                <form>
                <div>
                    <label className="label-contact">
                    Contact:<br/>
                    <input type="text" name="company" placeholder="Company Name" onChange={this.handleChange} class="input-contact"/>
                    </label>

                    <label class="label-contact">
                    Invoice #:<br/>
                    <input type="text" name="invoice"  placeholder="Invoice" onChange={this.handleChange} class="input-contact" />
                    </label>
                    
                    <label class="label-contact">
                    Amount:<br/>
                    <input type="text" name="date" placeholder="Amount" onChange={this.handleChange} class="input-contact" />
                    </label>

                    <label class="label-contact">
                    Waves Account:<br/>
                    <input type="text" name="dueDate" placeholder="Waves Account" onChange={this.handleChange} class="input-contact"/>
                    </label>

                    <label class="label-contact">
                    Amounts are:<br/>
                    <input type="text" name="Amounts"  value="Tax Inclusive" onChange={this.handleChange} class="input-contact" />
                    </label>
                </div>

                <div className="adress1">
                    <div className="billing-address-title">
                        Billing Address 
                    </div>

                    <div className="billing-address-form">
                        <label class="label-contact">
                        <input type="text" placeholder="address" name="address" onChange={this.handleChange} class="input-contact" />
                        </label><br/>
                    
                        <label class="label-contact">
                        <input type="text" placeholder="city" name="city" onChange={this.handleChange} class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="state" name="state" onChange={this.handleChange} class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="zip" name="zip" onChange={this.handleChange} class="input-contact" /> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" placeholder="country" name="country" onChange={this.handleChange} class="input-contact"/> 
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
                        <td className="newcontract-table-row-item"><input type="int" name="qty"  onChange={this.handleChange}/></td>
                        <td className="newcontract-table-row-item"><input type="int" name="unitPrice" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="discount" onChange={this.handleChange} /></td>
                        <td className="newcontract-table-row-item"><input type="int" name="amount"  onChange={this.handleChange}/></td>
                    </tr>
                </table>
                </form>
                <button
                onClick={() => {this.handleSubmit();return false;}} id="button-contact" />
          </div>
        );
      }
}

export default Contract;
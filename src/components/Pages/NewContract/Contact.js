import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label class="label-contact">
                    Contact:<br/>
                    <input type="text" name="Contact" value="Company Name"  class="input-contact"/>
                    </label>

                    <label class="label-contact">
                    Invoice #:<br/>
                    <input type="text" name="Invoice"  value="Invoice" class="input-contact"/>
                    </label>
                    
                    <label class="label-contact">
                    Date:<br/>
                    <input type="text" name="Date" value="Date" class="input-contact"/>
                    </label>

                    <label class="label-contact">
                    Due Date:<br/>
                    <input type="text" name="DueDate" value="DueDate" class="input-contact"/>
                    </label>

                    <label class="label-contact">
                    Amounts are:<br/>
                    <input type="text" name="Amounts"  value="Amounts" class="input-contact"/>
                    </label>
                </div>

                <div className="adress1">
                    <div className="billing-address-title">
                        Billing Address 
                    </div>

                    <div className="billing-address-form">
                        <label class="label-contact">
                        <input type="text" value="Address" name="Address" class="input-contact"/>
                        </label><br/>
                    
                        <label class="label-contact">
                        <input type="text" value="City/Town" name="City/Town" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="State/Region" name="State/Region" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="zip-code" name="zip-code" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="Country" name="Country" class="input-contact"/> 
                        </label><br/>
                    </div>

                    <div className="billing-address-title">
                        Postal Address
                    </div>

                    <div className="billing-address-form">
                        <label class="label-contact">
                        <input type="text" value="Address" name="Address" class="input-contact"/>
                        </label><br/>
                    
                        <label class="label-contact">
                        <input type="text" value="City/Town" name="City/Town" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="State/Region" name="State/Region" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="zip-code" name="zip-code" class="input-contact"/> 
                        </label>  <br/>

                        <label class="label-contact">
                        <input type="text" value="Country" name="Country" class="input-contact"/> 
                        </label><br/>
                    </div>
                </div>
                <br/>
                <table>
                    <tr>
                        <td>Code</td>
                        <td>Item</td>
                        <td>Description</td>
                        <td>Qty</td>
                        <td>Unit Price</td>
                        <td>Discount</td>
                        <td>Amount</td>
                    </tr>
                    <tr>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                        <td><input type="text"  name="Address" /></td>
                    </tr>
                </table>
                    <input type="submit" value="Submit" id="button-contact" />
                </form>
          </div>
        );
      }
}

export default Contact;
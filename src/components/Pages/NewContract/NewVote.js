import React from 'react';

class NewVote extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            key: "",
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/new',
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
                    Name:<br/>
                    <input type="text" name="key" placeholder="Name" onChange={this.handleChange} class="input-contact"/>
                    </label>
                    <label class="label-contact">
                    Value:<br/>
                    <input type="text" name="value"  placeholder="Value" onChange={this.handleChange} class="input-contact" />
                    </label>
                    <label class="label-contact">
                    Addresses:<br/>
                    <input type="text" name="addresses"  placeholder="Addresses" onChange={this.handleChange} class="input-contact" />
                    </label>
                    </div>
                 </form>
                <button
                onClick={() => {this.handleSubmit();return false;}} id="button-contact" />
          </div>
        );
      }
}

export default NewVote;
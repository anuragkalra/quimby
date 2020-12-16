import React from 'react';
import axios from 'axios';

class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            hours: 0,
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeHours = this.handleChangeHours.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //TODO: Can refactor this to work with change on multiple inputs
    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value, 
        });
    }

    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value, 
        });
    }

    handleChangeHours(event) {
        this.setState({
            hours: parseInt(event.target.value), 
        });
    }

    handleSubmit(event) {
        console.log("First Name:", this.state.firstName, ", Last Name:", this.state.lastName,  ", Hours:", this.state.hours)
        let url = 'http://localhost:9000/participants'
        let data = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            hours : this.state.hours
        }
        axios.post(url, data)
          .then(res=>console.log(res))
          .catch(e=>console.log(e))

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Add Participant</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    First Name:
                        <input type="text" value={this.state.value} onChange={this.handleChangeFirstName} />
                    </label>
                    <label>
                    Last Name:
                        <input type="text" value={this.state.value} onChange={this.handleChangeLastName} />
                    </label>
                    <label>
                    Hours:
                        <input type="text" value={this.state.value} onChange={this.handleChangeHours} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddParticipant;
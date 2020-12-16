import React from 'react';
import axios from 'axios';

class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            hours: 0,
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeHours = this.handleChangeHours.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //TODO: Can refactor this to work with change on multiple inputs
    handleChangeName(event) {
        this.setState({
            name: event.target.value, 
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
        console.log("Name:", this.state.name, ", Last Name:", this.state.lastName,  ", Hours:", this.state.hours)
        // let url = 'http://localhost:9000/testAPI'
        // let data = {
        //     name : this.state.name,
        //     lastName : this.state.lastName,
        //     hours : this.state.hours
        // }
        // axios.post(url, data)
        //   .then(res=>console.log(res))
        //   .catch(e=>console.log(e))

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Add Participant</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                        <input type="text" value={this.state.value} onChange={this.handleChangeName} />
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
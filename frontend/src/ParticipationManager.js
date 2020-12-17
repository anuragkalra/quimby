import React from 'react';
import axios from 'axios';
import AddParticipant from './AddParticipant';
//import OrderComponent from './LiftingState';
import ParticipantLog from './ParticipantLog';



class ParticipationManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            hours: 0,
            counter : 0
        }
    }

    firstNameChange = (val) => {
        this.setState({firstName : val})
    }

    lastNameChange = (val) => {
        this.setState({lastName : val})
    }

    hoursChange = (val) => {
        this.setState({hours : val})
    }

    submitParticipant = (e) => {
        if (isNaN(this.state.hours)) {
            alert('hours must be a number')
            return
        }
        if (this.state.hours <= 0) {
            alert('Hours must be greater than zero')
            return
        }
        let url = 'http://localhost:9000/participants'
        let data = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            hours : this.state.hours
        }
        axios.post(url, data)
            .then(res=>console.log(res))
            .then(e=>console.log(e))

        this.setState({
            firstName: '',
            lastName: '',
            hours: 0,
            counter: this.state.counter + 1
        })
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h1>Participation Manager</h1>
                <AddParticipant 
                    firstName={this.state.firstName}
                    onFirstNameChange={this.firstNameChange}
                    lastName={this.state.lastName}
                    onLastNameChange={this.lastNameChange}
                    hours={this.state.hours}
                    onHoursChange={this.hoursChange}

                    onSubmit={this.submitParticipant}
                />
                <ParticipantLog
                    counter={this.state.counter}
                />
            </div>
        );
    }
}

export default ParticipationManager;
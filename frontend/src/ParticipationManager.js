import React from 'react';
import axios from 'axios';
import AddParticipant from './AddParticipant';
import OrderComponent from './LiftingState';
import ParticipantLog from './ParticipantLog';



class ParticipationManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //tester: '',
            firstName: '',
            lastName: '',
            hours: 0,
            users : [],
            counter : 0
            //madeRequest: false
        }
    }

    // testerChanged = (val) => {
    //     this.setState({tester : val})
    // }

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
        //e.preventDefault();
        if (this.state.hours == 0) {
            alert('Hours must be greater than 0')
            return
        }
        //console.log(this.state)
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
            //tester: '',
            firstName: '',
            lastName: '',
            hours: 0,
            counter: this.state.counter + 1
        })
        //e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Participation Manager</h1>
                <AddParticipant 
                    // tester={this.state.tester}
                    // onTesterChange={this.testerChanged}
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

                {/* <OrderComponent /> */}
            </div>
        );
    }
}

export default ParticipationManager;
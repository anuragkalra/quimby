import React from 'react';
//import axios from 'axios';

class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFirstNameChange = (e) => {
        this.props.onFirstNameChange(e.target.value)
    }

    handleLastNameChange = (e) => {
        this.props.onLastNameChange(e.target.value)
    }

    handleHoursChange = (e) => {
        this.props.onHoursChange(e.target.value)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('child')
        this.props.onSubmit(event)
    }

    render() {
        return (
            <div>
                <h1>Add Participant</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    {/* Added nowrap styles for viewing on mobile */}
                    <label style={{whiteSpace:"nowrap"}}>
                    First Name:
                        <input type="text" value={this.props.firstName} onChange={this.handleFirstNameChange} />
                    </label>
                    <label style={{whiteSpace:"nowrap"}}>
                    Last Name:
                        <input type="text" value={this.props.lastName} onChange={this.handleLastNameChange}/>
                    </label>
                    <label style={{whiteSpace:"nowrap"}}>
                    Hours:
                        <input type="text" value={this.props.hours} onChange={this.handleHoursChange}/>    
                    </label>
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddParticipant;
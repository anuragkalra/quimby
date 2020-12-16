import React from 'react';

class ParticipantLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users : [],
            //counter : 0,
        }
    }

    componentDidMount() {
        fetch('http://localhost:9000/participants')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.counter)
        if (this.props.counter !== prevProps.counter) {
            console.log('in the condition')
            fetch('http://localhost:9000/participants')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }
    }

    render() {
        return (
            <div>
                <h1>Participant Log</h1>
                {this.state.users.map(u => <div key={u.id}>{u.first_name}</div>)}
            </div>
        );
    }
}

export default ParticipantLog;
import React from 'react';

class ParticipantLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users : [],
        }
        //this.handleDelete = this.handleDelete.bind(this)
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

    handleDelete(id) {
        console.log(id)
        //console.log('handleDelete')
        let url = 'http://localhost:9000/participants?id=' + id
        console.log(url)
        fetch(url, {
            method : 'DELETE'
        })
        //fetch('http://localhost:9000/participants')
    }

    render() {
        return (
            <div>
                <h1>Participant Log</h1>
                {this.state.users.map(u =>
                     <div key={u.id}>{u.first_name} {u.last_name} {u.hours} {u.id}
                      <button onClick={(e) => this.handleDelete(u.id, e)}>X</button>
                     </div>
                )}
            </div>
        );
    }
}

export default ParticipantLog;
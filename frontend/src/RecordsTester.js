import React from 'react';

class RecordsTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
            //apiResponse : ""
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/testAPI')
        .then(res => res.json())
        .then(users => this.setState({ users : users }));
    }

    render() {

        return (
            <div style={{color: "green"}}>
                <h1>Records</h1>
                {this.state.users.map(u => <span key={u.id}>{u.name}</span>)}
            </div>
        )
    }
}

export default RecordsTester;
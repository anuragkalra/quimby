import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class ParticipantLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dummy : 0,
            users : [],
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

    handleDelete(id) {
        console.log(id)
        let url = 'http://localhost:9000/participants?id=' + id
        console.log(url)
        fetch(url, {
            method : 'DELETE'
        })
        // this.setState({
        //     dummy : this.state.dummy + 1
        // })
        window.location.reload();
    }

    render() {
        let data = []
        let colors = ["#A0E7E5", "#B4F8C8", "#AC19DD", "#98DE6C", "#AA42CF", "28C4DF"]
        this.state.users.forEach((e, i) => data.push(
            {
                title: e.first_name,
                value: parseInt(e.hours),
                color: colors[i]
            })
        )
        console.log(data)
        return (
            <div>
                <h1>Participant Log</h1>
                <h2>Summary</h2>
                <PieChart style={{height:"200px", fontSize:"50%"}}
                    label={
                        ({ dataEntry }) => dataEntry.title
                    }
                    data={data}
                />
                <div>
                <h2>Transactions</h2>
                {this.state.users.map(u =>
                     <div key={u.id}>{u.first_name} {u.last_name} {u.hours}
                      <button onClick={(e) => this.handleDelete(u.id, e)}>X</button>
                     </div>
                )}
                </div>
            </div>
        );
    }
}

export default ParticipantLog;
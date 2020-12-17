import './ParticipantLog.sass'
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class ParticipantLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dummy : 0,
            users : [],
            usersSum : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9000/participants')
        .then(res => res.json())
        .then(users => this.setState({ users }));

        fetch('http://localhost:9000/participantSums')
        .then(res => res.json())
        .then(usersSum => this.setState({usersSum}))
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
        window.location.reload();
    }

    render() {
        let data = []
        let colors = ["#A0E7E5", "#B4F8C8", "#AC19DD", "#98DE6C", "#BB88C0", "AAC8DF", "#ABCDEF"]
        this.state.users.forEach((e, i) => data.push(
            {
                title: e.first_name,
                value: parseInt(e.hours),
                color: colors[i]
            })
        )
        console.log(data)

        let totalHours = 0;
        let sumData = []
        for (let i = 0; i < this.state.usersSum.length; i++) {
            sumData.push(
                {
                    title : this.state.usersSum[i].first_name + ' ' + this.state.usersSum[i].last_name,
                    value: parseInt(this.state.usersSum[i].hours),
                    color: colors[i]
                }
            )
            totalHours += parseInt(this.state.usersSum[i].hours)
        }
        console.log(this.state.usersSum)
        console.log("totalHours", totalHours)

        return (
            <div>
                <h1>Participant Log</h1>
                <h2>New Pie Chart</h2>
                <PieChart style={{height:"200px", fontSize:"50%"}}
                    label={
                        ({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`
                    }
                    data={sumData}
                />

                {/* <h2>Old Pie Chart</h2>
                <PieChart style={{height:"200px", fontSize:"50%"}}
                    label={
                        ({ dataEntry }) => dataEntry.title
                    }
                    data={data}
                /> */}
                <h2>Participants</h2>
                <ul className="Participants">
                    {sumData.map((e, i) => <li style={{backgroundColor:colors[i]}}>{e.title} Hours: {e.value} </li>)}
                </ul>
                <div>
                <h2>Transactions</h2>
                {/* {this.state.users.map(u =>
                     <div key={u.id}>{u.first_name} {u.last_name} {u.hours}
                      <button onClick={(e) => this.handleDelete(u.id, e)}>X</button>
                     </div>
                )} */}
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hours</th>
                        <th>Participation</th>
                        <th>Delete</th>
                    </tr>
                    {this.state.users.map(u =>
                    <tr>
                        <td>{u.first_name}</td>
                        <td>{u.last_name}</td>
                        <td>{u.hours}</td>
                        <td>{Math.round(100 * u.hours/totalHours) + "%"}</td>
                        <td><button onClick={(e) => this.handleDelete(u.id, e)}>X</button></td>
                    </tr>
                    )}
                </table>
                </div>
            </div>
        );
    }
}

export default ParticipantLog;
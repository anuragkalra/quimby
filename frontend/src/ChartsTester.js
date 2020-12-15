import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class ChartsTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/testAPI')
          .then(res => res.json())
          .then(users => this.setState({ users }));
    }

    render() {
        let data = []
        //Need some better way to generate colors programmatically
        this.state.users.forEach(e => data.push(
          {
            name: e.name,
            value: e.hours,
            color: "#"+Math.floor(Math.random()*16777215).toString(16)
          })
        )
        console.log(data)
        return (
          <div>
            <h1>Users</h1>
            <PieChart style={{height:"200px"}}
              label={
                ({ dataEntry }) => dataEntry.name
              }
              data={data}
            />
          </div>
        );
    }
}

export default ChartsTester;
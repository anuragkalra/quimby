import React from 'react';

class Records extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //users: []
            apiResponse : ""
        };
    }

    componentDidMount() {
        // console.log('about to fetch')
        // fetch('http://localhost:9000/')
        // .then(res => console.log(res))
        //   //.then(res => res.json)
        //   //.then(users => this.setState({ users }));
        // console.log('finished fetch')
        fetch("http://localhost:9000/testAPI/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
    }

    render() {

        return (
            <div style={{color: "green"}}>
                <h1>Records</h1>
                <h2>{this.state.apiResponse}</h2>
            </div>
        )
    }
}

export default Records;
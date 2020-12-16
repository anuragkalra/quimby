import React from 'react';
import AddParticipant from './AddParticipant';



class ParticipationManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Participation Manager</h1>
                <AddParticipant />
            </div>
        );
    }
}

export default ParticipationManager;
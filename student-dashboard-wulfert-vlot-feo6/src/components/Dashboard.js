import React, {Component} from 'react';
//import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {naam: average};
      }
    render() {
        const av = this.state.naam;
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Moeilijkheid</h2>
                <V.VictoryChart>
                <V.VictoryGroup
                    offset={10}
                >
                    <V.VictoryBar
                    
                        data={av}
                        x="Opdracht"
                        y="Leuk"
                    />
                    <V.VictoryBar 
                    
                        data={av}
                        x="Opdracht"
                        y="Moeilijk"/>
                </V.VictoryGroup>
                </V.VictoryChart>
            </div>
                );
            }
}
  export default Dashboard;
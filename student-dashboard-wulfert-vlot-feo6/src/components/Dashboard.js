import React, {Component} from 'react';
//import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';
import Grading from '../resource/data';
import { findByLabelText } from '@testing-library/react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleLeukClick = this.handleLeukClick.bind(this);
        this.handleMoeilijkClick = this.handleMoeilijkClick.bind(this);
        this.state = 
        {
            naam: average,
            leuk: true,
            moeilijk: true
        };
        
      }
    handleLeukClick() {
        if(this.state.leuk === false)
        {
            this.setState({leuk: true});
        }else if(this.state.leuk === true)
        {
            this.setState({leuk: false});
        }
    }
    handleMoeilijkClick() {
        if(this.state.moeilijk === false)
        {
            this.setState({moeilijk: true});
        }else if(this.state.moeilijk === true)
        {
            this.setState({moeilijk: false});
        }
    }
    render() {
        const av = this.state.naam;
        const reeksInit = Array.from(Grading);
        console.log(reeksInit);
        let reeks = [];
        console.log(typeof reeks)
        for(let i = 0; i<56; i++){
            reeks.push(reeksInit[i].Opdracht)
        }
        console.log(`alle opdrachten: ${reeks}`);
        // let leuk = true;
        // let moeilijk = true;
        
        if(this.state.leuk === true && this.state.moeilijk === true)
        {
        return (
            <div>
                {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
                {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
                <h1>Dashboard</h1>
                <h2>Moeilijkheid en Leukheid</h2>
                
                <V.VictoryChart>
                <V.VictoryGroup
                    offset={10}
                >
                    <V.VictoryBar
                    
                        data={av}
                        x="Opdracht"
                        y="Leuk"
                        tickValues={reeks}
                    />
                    <V.VictoryBar 
                    
                        data={av}
                        x="Opdracht"
                        y="Moeilijk"
                        tickValues={reeks}
                        
                    />
                    {/* <V.VictoryAxis
                        fixLabelOverlap
                        style={{
                            tickLabels:
                            {
                                fontsize: 4,
                                angle: 50
                            }
                        }}
                    ></V.VictoryAxis> */}
                </V.VictoryGroup>
                <V.VictoryAxis
                        tickValues={reeks}
                        
                        style={{
                            tickLabels:{
                                
                                fontSize: 6,    
                                angle: 60
                            }
                        }}
                     />
                </V.VictoryChart>
            </div>
                );
        }else if(this.state.leuk === true && this.state.moeilijk === false)
        {
            return (
                <div>
                    {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
                    {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
                    <h1>Dashboard</h1>
                    <h2>Leukheid</h2>
                    
                    <V.VictoryChart>
                    <V.VictoryGroup
                        offset={10}
                    >
                        <V.VictoryBar
                        
                            data={av}
                            x="Opdracht"
                            y="Leuk"
                        />
                    </V.VictoryGroup>
                    </V.VictoryChart>
                </div>
                    );
        }else if(this.state.moeilijk === true && this.state.leuk === false)
        {
            return (
                <div>
                    {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
                    {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
                    <h1>Dashboard</h1>
                    <h2>Moeilijkheid</h2>
                    
                    <V.VictoryChart>
                    <V.VictoryGroup
                        offset={10}
                    >
                        <V.VictoryBar 
                        
                            data={av}
                            x="Opdracht"
                            y="Moeilijk"/>
                    </V.VictoryGroup>
                    </V.VictoryChart>
                </div>
                    );
        }else
        {
            return (
                <div>
                    {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
                    {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
                    <h1>Dashboard</h1>
                    <h2>Niets weer te geven</h2>
                    
                    
                </div>
                    );
        }
            }
}
  export default Dashboard;
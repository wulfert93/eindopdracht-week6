import React, {Component} from 'react';
import * as V from 'victory';
import Grading from '../resource/data';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleLeukClick = this.handleLeukClick.bind(this);
        this.handleMoeilijkClick = this.handleMoeilijkClick.bind(this);
        this.state = 
        {
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
        const reeks = [...new Set(Grading.map(data => data.Opdracht))]
        const gemMoeilijkFunctie = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Opdracht;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Moeilijk;
                counts[name]++;
            }
        
            for(name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const gemLeukFunctie = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Opdracht;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Leuk;
                counts[name]++;
            }
        
            for(name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const gemMoeilijk = gemMoeilijkFunctie(Grading);
        const gemLeuk = gemLeukFunctie(Grading);
        if(this.state.leuk && this.state.moeilijk)
        {
        return (
            <div>
                {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
                {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
                <h1>Dashboard</h1>
                <h2>Moeilijkheid en</h2><h2 className="color">Leukheid</h2>
                
                <V.VictoryChart>
                    <V.VictoryGroup
                        offset={10}
                    >
                        <V.VictoryBar
                        
                            data={gemLeuk}
                            x="name"
                            y="value"
                            tickValues={reeks}
                            style={{ data: { fill: "rgb(226, 47, 211)" } }}
                        />
                        <V.VictoryBar 
                        
                            data={gemMoeilijk}
                            x="name"
                            y="value"
                            tickValues={reeks}
                            
                        />
                    </V.VictoryGroup>
                    <V.VictoryAxis
                            tickValues={reeks}
                            style={{
                                tickLabels:{
                                    padding: 8,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,    
                                    angle: 60
                                }
                            }}
                    />
                    <V.VictoryAxis crossAxis dependentAxis
                        width={400}
                        height={400}
                        domain={[0, 5]}
                        standalone={false}
                    />
                </V.VictoryChart>
            </div>
                );
        }else if(this.state.leuk && this.state.moeilijk === false)
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
                            
                                data={gemLeuk}
                                x="name"
                                y="value"
                                style={{ data: { fill: "rgb(226, 47, 211)" } }}
                            />
                        
                        </V.VictoryGroup>
                        <V.VictoryAxis
                            tickValues={reeks}
                            style={{
                                tickLabels:{
                                    padding: 8,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,    
                                    angle: 60
                                }
                            }}
                        />
                        <V.VictoryAxis crossAxis dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </V.VictoryChart>
                </div>
                    );
        }else if(this.state.moeilijk && this.state.leuk === false)
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
                            
                                data={gemMoeilijk}
                                x="name"
                                y="value"
                                style={{ data: { fill: "rgb(226, 47, 211)" } }}
                            />
                                
                        </V.VictoryGroup>
                        <V.VictoryAxis
                            tickValues={reeks}
                            style={{
                                tickLabels:{
                                    padding: 8,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,    
                                    angle: 60
                                }
                            }}
                        />
                        <V.VictoryAxis crossAxis dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
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
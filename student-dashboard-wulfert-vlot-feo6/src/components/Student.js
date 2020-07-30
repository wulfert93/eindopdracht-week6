import React, {Component} from 'react';
import * as V from 'victory';
import Grading from '../resource/data';

class Student extends Component{
  constructor(props){
    super(props)
    this.handleLeukClick = this.handleLeukClick.bind(this);
    this.handleMoeilijkClick = this.handleMoeilijkClick.bind(this);
    this.state = {
      name: props.name,
      leuk: true,
      moeilijk: true
    };
  }
  componentDidMount() {
    
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
  render(){

    const name = this.state.name;
    const query =  Grading.filter(function(deel) 
    {
      return deel.Naam === name;
    });
    console.log(query);
    const reeksInit = Array.from(Grading);
    let reeks = [];
    for(let i = 0; i<56; i++){
      reeks.push(reeksInit[i].Opdracht)
    }
    if(this.state.leuk && this.state.moeilijk)
    {
    return (
        <div>
            {<input type="button" onClick={this.handleLeukClick} value="Leuk"></input>}
            {<input type="button" onClick={this.handleMoeilijkClick} value="Moeilijk"></input>}
            <h1>{this.state.name}</h1>
            <h2>Moeilijkheid en </h2><h2 className="color">Leukheid</h2>
            
            <V.VictoryChart>
            <V.VictoryGroup
                offset={10}
            >
                <V.VictoryBar
                
                    data={query}
                    x="Opdracht"
                    y="Leuk"
                    style={{ data: { fill: "rgb(226, 47, 211)" } }}
                />
                <V.VictoryBar 
                
                    data={query}
                    x="Opdracht"
                    y="Moeilijk"
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
                <h2 className="color">Leukheid</h2>
                
                <V.VictoryChart>
                <V.VictoryGroup
                    offset={10}
                >
                    <V.VictoryBar
                    
                        data={query}
                        x="Opdracht"
                        y="Leuk"
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
                    
                        data={query}
                        x="Opdracht"
                        y="Moeilijk"
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
    }}
};
export default Student;

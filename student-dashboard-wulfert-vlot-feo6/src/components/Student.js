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
        console.log(`leuk is: ${this.state.leuk}`);
    }else if(this.state.leuk === true)
    {
        this.setState({leuk: false});
        console.log(`leuk is: ${this.state.leuk}`);
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
    console.log(this.state.name)
    const name = this.state.name;
    const query =  Grading.filter(function(deel) 
    {
      return deel.Naam === name;
    });
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
                
                    data={query}
                    x="Opdracht"
                    y="Leuk"
                />
                <V.VictoryBar 
                
                    data={query}
                    x="Opdracht"
                    y="Moeilijk"/>
            </V.VictoryGroup>
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
                    
                        data={query}
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
                    
                        data={query}
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
    }}
};
export default Student;
//   return (
//       
      
  
//   );
// };
// export default Student;

import React, {Component} from 'react';
import * as V from 'victory';
import average from '../resource/gemiddelden';
import Grading from '../resource/data';

class Student extends Component{
  constructor(props){
    super(props)
    this.state = {name: props.name};
  }
  render(){
    console.log(this.state.name)
    const name = this.state.name;
    const query =  Grading.filter(function(deel) 
    {
      return deel.Naam === name;
    });
  return (
    <div>
        <h1>Student Component</h1>
        {this.props.name}
        



                    <V.VictoryChart>
                    <V.VictoryBar data={query}
                    x="Opdracht"
                    y="Leuk"
                    />
                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={query}
                    x="Opdracht"
                    y="Moeilijk"
                    />
                    </V.VictoryChart>
      </div>
  )}
};
export default Student;
//   return (
//       
      
  
//   );
// };
// export default Student;

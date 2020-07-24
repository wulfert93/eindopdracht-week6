import React, {Component} from 'react';
import Grading from '../resource/data';
import * as V from 'victory';

const Student = (props) => {
  const naam = props.naam;
  return (
      <div>
        {props.naam}
        <h2>Moeilijkheid</h2>
                    <V.VictoryChart>
                        
                    <V.VictoryBar data={naam}
                    x="Opdracht"
                    y="Leuk"
                    />

                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={naam}
                    x="Opdracht"
                    y="Moeilijk"

                    />
                    </V.VictoryChart>
      </div>
      
  
  );
};
export default Student;

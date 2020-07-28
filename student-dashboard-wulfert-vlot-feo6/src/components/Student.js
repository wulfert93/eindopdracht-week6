import React, {Component} from 'react';
import * as V from 'victory';
import average from '../resource/gemiddelden';

const Student = (props) => {
  console.log(`props from Student.js: ${typeof props}`)
  console.log(`props from dataset in Student.js: ${typeof props.dataset}`)
  //console.log(`props naam: ${props.location.aboutProps}`);
  return (
      <div>
        {/* {props.dataset}

{/*        
        <h2>Moeilijkheid</h2> */}
                    <V.VictoryChart>
                    <V.VictoryBar data={props.dataset}
                    x="Opdracht"
                    y="Leuk"
                    />
                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={props.dataset}
                    x="Opdracht"
                    y="Moeilijk"
                    />
                    </V.VictoryChart> */}
      </div>
      
  
  );
};
export default Student;

import React, {Component} from 'react';
import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';

// const Grading = Data.Grading;

class Dashboard extends Component {
    render() {
        //const allData = Array.from(Grading).map(item => (`Naam: ${item.Naam}, Opdracht: ${item.Opdracht}, Moeilijkheid: ${item.Moeilijk}, Leuk: ${item.Leuk}`));
        //const allNames = Array.from(Grading).map(item => (`Naam: ${item.Naam}`));
        //const allAssignments = Array.from(Grading).map(item => (`Opdracht: ${item.Opdracht}`));
        //const allDifficulties = Array.from(Grading).map(item => (`Moeilijkheid: ${item.Moeilijk}`));
        //const difficultiesNumbers = allDifficulties.toString().charAt(3);
        //const newNames = Grading.Naam;
        //const allNice = Array.from(Grading).map(item => (`Leuk: ${item.Leuk}`));

        //for (let i =0; i <allData.length; i++)
        //{
            //console.log(`i: ${allData[i]}`);
   

        const av = average;
        console.log(av);
        const grading = Grading;
        console.log(grading);
        //const arr = Array.from(Grading);
        // const Naam = 
        return (
        //console.log(`Grading: ${Grading}`)
            <div>
                <h1>Dashboard</h1>
                <ul>
                    <h2>Moeilijkheid</h2>
                    <V.VictoryChart>
                        
                    <V.VictoryBar data={av}
                    x="Opdracht"
                    y="Leuk"
                    // style={
                    //      {
                    //       fill: ({ datum }) => datum.fill,
                    //       opacity: ({ datum }) => datum.opacity
                    //     }
                    />

                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={av}
                    x="Opdracht"
                    y="Moeilijk"
                    // style={
                    //      {
                    //       fill: ({ datum }) => datum.fill,
                    //       opacity: ({ datum }) => datum.opacity
                    //     }
                    />
                    </V.VictoryChart>
                {/* <VictoryChart> */}
                    {/* <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                    />
                </VictoryChart> */}
                {/* {allData} */}
                </ul>
            </div>
        );
        }
    }
  export default Dashboard;
import React, {Component} from 'react';
import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';
import Student from './Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Dashboard extends Component {
    render() {
        const allNames = (Grading).map(item => (`Naam: ${item.Naam}`));
        const av = average;
        const namen = [
            {id: 0, naam: "Evelyn"},
            {id: 1, naam: "Aranka"},
            {id: 2, naam: "Floris"},
            {id: 3, naam: "Hector"},
            {id: 4, naam: "Martina"},
            {id: 5, naam: "Maurits"},
            {id: 6, naam: "Rahima"},
            {id: 7, naam: "Sandra"},
            {id: 8, naam: "Wietske"},
            {id: 9, naam: "Storm"}
        ];
        const Evelyn =  Grading.filter(function(deel) {
            return deel.Naam == "Evelyn";
        });
        return (
            <div>
                <ul>
                {namen.forEach(element => <li>{(element.naam)}</li>)}
                </ul>
                
                <h1>Dashboard</h1>
                <h2>Moeilijkheid</h2>
                <V.VictoryChart>
                    <V.VictoryBar data={av}
                    x="Opdracht"
                    y="Leuk"
                    />
                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={av}
                    x="Opdracht"
                    y="Moeilijk"
                    />
                </V.VictoryChart>
            </div>
                );
            }
}
  export default Dashboard;
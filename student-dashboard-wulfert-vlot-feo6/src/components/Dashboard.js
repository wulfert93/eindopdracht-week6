import React, {Component} from 'react';
import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';
import Graph from './StudentGraph'
import studentGraph from './Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {naam: average};
        //this.handleClick = this.handleClick.bind(this);
      }
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
        const Aranka =  Grading.filter(function(deel) {
            return deel.Naam == "Aranka";
        });
        const Floris =  Grading.filter(function(deel) {
            return deel.Naam == "Floris";
        });
        const Hector =  Grading.filter(function(deel) {
            return deel.Naam == "Hector";
        });
        const Martina =  Grading.filter(function(deel) {
            return deel.Naam == "Martina";
        });
        const Maurits =  Grading.filter(function(deel) {
            return deel.Naam == "Maurits";
        });
        const Rahima =  Grading.filter(function(deel) {
            return deel.Naam == "Rahima";
        });
        const Sandra =  Grading.filter(function(deel) {
            return deel.Naam == "Sandra";
        });
        const Wietske =  Grading.filter(function(deel) {
            return deel.Naam == "Wietske";
        });
        const Storm =  Grading.filter(function(deel) {
            return deel.Naam == "Storm";
        });
        const handleClickEvlyn = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Evelyn});
            event.preventDefault();
        }
        const handleClickAranka = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Aranka});
            event.preventDefault();
        }
        const handleClickFloris = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Floris});
            event.preventDefault();
        }
        const handleClickHector = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Hector});
            event.preventDefault();
        }
        const handleClickMartina = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Martina});
            event.preventDefault();
        }
        const handleClickMaurits = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Maurits});
            event.preventDefault();
            console.log(Evelyn)
        }
        const handleClickRahima = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Rahima});
            event.preventDefault();
        }
        const handleClickSandra = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Sandra});
            event.preventDefault();
        }
        const handleClickWietske = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Wietske});
            event.preventDefault();
        }
        const handleClickStorm = (event) => {
            
            //console.log(`The name was clicked and the current state equals: ${this.state.naam} and you clicked on: ${event.target.innerText}`);
            //console.log(`${typeof Storm}, ${typeof event.target.innerText}`);
            this.setState({naam: Storm});
            event.preventDefault();
        }
        
        //console.log(`currentstate: ${this.state.naam}`);
        // function handleClick(e) {
        //     e.preventDefault();
        //     console.log(`The link was clicked.: ${this.state.naam}`);
        //   }
        return (
            <div>
                <ul>
                Klik op een naam voor de bijbehorende resultaten
                {/* {namen.forEach(item => console.log('banaan'))} */} 
                <li onClick={handleClickEvlyn}>Evelyn   </li>
                <li onClick={handleClickAranka}>Aranka</li>
                <li onClick={handleClickFloris}>Floris</li>
                <li onClick={handleClickHector}>Hector</li>
                <li onClick={handleClickMartina}>Martina</li>
                <li onClick={handleClickMaurits}>Maurits</li>
                <li onClick={handleClickRahima}>Rahima</li>
                <li onClick={handleClickSandra}>Sandra</li>
                <li onClick={handleClickWietske}>Wietske</li>
                <li onClick={handleClickStorm}>Storm</li>
                
                </ul>
                <h1>Dashboard</h1>
                <h2>Moeilijkheid</h2>
                <V.VictoryChart
                
                
                >
                    <V.VictoryBar data={this.state.naam}
                    x="Opdracht"
                    y="Leuk"
                    />
                    </V.VictoryChart>
                    <h2>Leukheid</h2>
                    <V.VictoryChart>
                    <V.VictoryBar data={this.state.naam}
                    x="Opdracht"
                    y="Moeilijk"
                    />
                </V.VictoryChart>
            </div>
                );
            }
}
  export default Dashboard;
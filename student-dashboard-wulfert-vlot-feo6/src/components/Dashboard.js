import React, {Component} from 'react';
import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {naam: average};
      
      }
    render() {
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
            this.setState({naam: Evelyn});
            event.preventDefault();
        }
        const handleClickAranka = (event) => {
            this.setState({naam: Aranka});
            event.preventDefault();
        }
        const handleClickFloris = (event) => {
            this.setState({naam: Floris});
            event.preventDefault();
        }
        const handleClickHector = (event) => {
            this.setState({naam: Hector});
            event.preventDefault();
        }
        const handleClickMartina = (event) => {
            this.setState({naam: Martina});
            event.preventDefault();
        }
        const handleClickMaurits = (event) => {
            this.setState({naam: Maurits});
            event.preventDefault();
            console.log(Evelyn)
        }
        const handleClickRahima = (event) => {
            this.setState({naam: Rahima});
            event.preventDefault();
        }
        const handleClickSandra = (event) => {
            this.setState({naam: Sandra});
            event.preventDefault();
        }
        const handleClickWietske = (event) => {
            this.setState({naam: Wietske});
            event.preventDefault();
        }
        const handleClickStorm = (event) => {
            this.setState({naam: Storm});
            event.preventDefault();
        }
        return (
            <div>
                <ul>
                    Klik op een naam voor de bijbehorende resultaten
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
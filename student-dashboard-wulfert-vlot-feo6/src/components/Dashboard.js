import React, {Component} from 'react';
//import Grading from '../resource/data';
import average from '../resource/gemiddelden';
import * as V from 'victory';
import Grading from '../resource/data';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleLeukClick = this.handleLeukClick.bind(this);
        this.handleMoeilijkClick = this.handleMoeilijkClick.bind(this);
        this.state = 
        {
            naam: average,
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
        
        //const reeksInit = Array.from(Grading);
        //let reeks = [];
        //reeks dynamisch
        const reeks = [...new Set(Grading.map(data => data.Opdracht))]
        // for(let i = 0; i<reeks.length; i++){
        //     reeks.push(reeksInit[i].Opdracht)
        // }
        //console.log(`reeks: ${reeks}`);
        //console.log(`reeks: ${reeks}`);
        //console.log(`reeks: ${reeks[0]}`)
        //uit Grading(grote data) is een array met 56 objecten
        //
        //elke object heeft dus de volgende items
        //opdracht, leuk en moeilijk. 
        const array = [{
            Opdracht: '',
            Moeilijk: 0,
            Leuk: 0
        }];
        //opvullen
        //1. de namen van de opdracht ophalen
        //
        //opdracht namen invullen
        for(let i=0;i<reeks.length;i++){
            array.push({opdracht: reeks[i],
                moeilijk: 0,
                leuk: 0
            })
        }
        console.log(typeof array[3].moeilijk)
        //console.log(reeks[0]);
        //leuk invullen
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
        //console.log(hemd);
        //console.log(`Molshoop: ${average(Grading)}`);
        //const moeilijkAv = average(Grading);
                //array[i].leuk = i;

                // const query =  Grading.filter(function(deel) 
                // {
                //   return deel.Opdracht === reeks[i].Opdracht;
                // });
                //
                //optellen
                // for(i=0;i<reeks.length;i++)
                // {
                //     const sum = i;
                //     array[i].leuk = sum;
                // }
                //delen
                //
                //
                //
                //array[i].leuk = i;
        
        // for( let i=0;i<reeks.length;i++)
        // {
        //     array[i].moeilijk = i;
        // }
        //array.shift();
        const av = this.state.naam;
        array[50].Leuk =3;
        console.log(array[50].Leuk)
        //
        if(this.state.leuk && this.state.moeilijk)
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
                    
                        data={gemLeuk}
                        x="name"
                        y="value"
                        tickValues={reeks}
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
                            
                                data={av}
                                x="Opdracht"
                                y="Leuk"
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
                        
                            data={av}
                            x="Opdracht"
                            y="Moeilijk"/>
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
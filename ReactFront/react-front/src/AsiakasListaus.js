import React, { Component } from 'react';

class AsiakasLista extends Component {

    constructor(props) {
        super(props);

        console.log("AsiakasLista.constructor");
        this.state = { ladattu: false, data: null };
    }

    componentDidMount() {
       
        console.log("AsiakasLista.componentDidMount");
        let komponentti = this;

        fetch('https://localhost:44358/api/asiakkaat')
        .then(response => response.json())
        .then(json => {
         
            console.log("Fetch-kutsu valmis!");
            console.log(json);

            komponentti.setState({ladattu: true, data: json});
            console.log("SetState-rutiinia kutsuttu.");

        });

        console.log("AsiakasLista.componentDidMount: fetch-kutsu tehty");
    }

  render() {
    console.log("AsiakasLista.render");

    if (this.state.ladattu === false) {
        return (
            <div>
                <h1>Odota, ladataan tietoja...</h1>
            </div>
        );
    }
    else {

        let asiakkaat = [];
        for (let index = 0; index < this.state.data.length; index++) {
            let nimi = this.state.data[index].companyName;
            let kontakti = this.state.data[index].contactName;
            let kaupunki = this.state.data[index].city;

            asiakkaat.push(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{nimi}</td>
                <td>{kontakti}</td>
                <td>{kaupunki}</td>
              </tr>);
        }

        return (
            <div>
                <p></p>
                <h1>Asiakkaat Northwind-tietokannasta</h1>
                <p></p>

                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Yritys</th>
                        <th scope="col">Kontakti</th>
                        <th scope="col">Kaupunki</th>
                        </tr>
                    </thead>
                    <tbody>
                        {asiakkaat}
                    </tbody>
                </table>                
            </div>
        );
    }    
  }
}

export default AsiakasLista;

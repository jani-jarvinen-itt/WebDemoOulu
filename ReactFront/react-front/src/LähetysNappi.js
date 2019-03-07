import React, { Component } from 'react';

class LähetysNappi extends Component {

    lisääAsiakas() {

        let data = 
        {
            "customerId": "REACT",
            "companyName": "React-demon kautta!",
            "contactName": "M. Möttönen",
            "contactTitle": "Tirehtööri",
            "address": "Web-devauspolku 1",
            "city": "Oulu"
        };

        let url = "https://localhost:44358/api/asiakkaat/";
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        alert("Fetch-pyyntö lähetetty!");
    }

  render() {
    return (
      <div>
          <p></p>
          <button onClick={this.lisääAsiakas} type="button" class="btn btn-primary">Lisää uusi asiakas tietokantaan</button>
          <p></p>
      </div>
    );
  }
}

export default LähetysNappi;

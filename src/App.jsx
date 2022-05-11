import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );
    const newLocal = (
      <div className="App">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            textDecorationColor: "white",
          }}
        >
          <Link to="/Gebruikers">Gebruikers</Link> |{" "}
          <Link to="/Test">Test</Link>
        </nav>
        <h1>&nbsp; &nbsp; Klanten</h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            <table>
              <tr>
                ID: {item.id}
                <br></br>
                Username: {item.username}
                <br></br>
                Full name: {item.name}
                <br></br>
                E-Mail: {item.email}
                <br></br>
                Street: {item.address.street}
                <br></br>
                City: {item.address.city}
                <br></br>
                Zipcode: {item.address.zipcode}
                <br></br>
                Phone: {item.phone}
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
              </tr>
            </table>
          </ol>
        ))}
      </div>
    );
    return newLocal;
  }
}
export default App;

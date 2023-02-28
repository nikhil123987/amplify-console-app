import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// import "@aws-amplify/ui-react/styles.css";
//import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(awsExports);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);

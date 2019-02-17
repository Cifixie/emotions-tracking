import React, { Component } from "react";
import lambdaService from "../services/lambda";

class App extends Component {
  render() {
    const { access_token } = this.props;
    console.debug(access_token);
    return (
      <div>
        <header>
          <h1>Appapadpaps</h1>
        </header>
        <main>
          <p>heehee</p>
          <button
            type="button"
            onClick={() => lambdaService.get("/hello", access_token)}
          >
            Hello!
          </button>
        </main>
      </div>
    );
  }
}

export default App;

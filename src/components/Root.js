import React from "react";
import Identity from "./Identity";
import App from "./App";

export default () => <Identity>{props => <App {...props} />}</Identity>;

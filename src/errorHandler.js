import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class errorHandler extends Component {
    render() {
        return <div><h1>404: Not Found</h1></div>;
    }
}

export default errorHandler;
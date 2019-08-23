import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("caught an error", error, info);
  }

  render() {
    return this.state.hasError ? (
      <p className="error-boundary">
        <h1>Error Boundary Caught an Error!</h1>
        <Link to="/">Click here</Link> to return to home page, or wait 5
        seconds...
      </p>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

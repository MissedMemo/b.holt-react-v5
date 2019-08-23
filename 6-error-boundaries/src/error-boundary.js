import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("caught an error", error, info);

    setTimeout(() => {
      navigate("/");
    }, 5000);
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

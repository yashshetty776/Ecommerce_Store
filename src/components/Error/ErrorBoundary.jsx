import React, {Component} from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error Caught by Error Boundary: ",error, errorInfo);
    }
    render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            Reload
          </button>
        </div>
      );
    }
        return this.props.children;
    }
}

export default ErrorBoundary;
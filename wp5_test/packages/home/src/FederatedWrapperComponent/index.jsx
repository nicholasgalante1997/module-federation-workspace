import React from 'react';

class FederatedWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
   // logErrorToMyService(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return this.props.error || <h1>Something went wrong.</h1>;
      }
      return (
        <React.Suspense fallback={this.props.delayed || <div style={{width: 100, height: 50, color: 'darkblue'}}/>}>
          {this.props.children}
        </React.Suspense>
      );
    }
}

export default FederatedWrapper;

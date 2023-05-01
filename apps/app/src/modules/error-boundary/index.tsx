import React, { Component, ErrorInfo, ReactNode } from 'react';

import Button from '_components/button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleReload = () => window.location.reload();

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          <Button onClick={this.handleReload} label="Relancer l'application" />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

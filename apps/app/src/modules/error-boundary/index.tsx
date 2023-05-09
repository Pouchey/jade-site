import { Component, ErrorInfo, ReactNode } from 'react';

import Button from '_components/button';
import Loader from '_components/loader';

import { StyledErrorWrapper } from './style';

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
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleReload = () => window.location.reload();

  public render() {
    if (this.state.hasError) {
      return (
        <StyledErrorWrapper>
          <Loader label="Une erreur est survenue." />
          <Button onClick={this.handleReload} label="Relancer l'application" />
        </StyledErrorWrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

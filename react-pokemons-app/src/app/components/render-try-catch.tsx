import { Component, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{

}>;

type State = {
  hasError: boolean
}
class RenderTryCatch extends Component<Props, State> {
  readonly state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // TODO appeler un service de log
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div onClick={() => this.setState({
        hasError: false
      })}>Une erreur s'est produite</div>;
    }

    return this.props.children;
  }
}

export default RenderTryCatch;

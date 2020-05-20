import React, {Component, Fragment} from 'react';


const withErrorHandler = (WrappedComponent, axios) => {
    return class ErroHandler extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(
                res => res,
                error => {
                    this.setState({ error });
                    return error
                })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }

        render() {
            let error =  this.state.error ? <p>Error: {this.state.error.message}</p> : null

            return (
                <Fragment>
                    {error}
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler;

// Complete error handler with modal
import React from 'react'

class ErrorBoundry extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        return this.state.hasError ?
        <h1 className="red">Oooops... there's an error</h1> : this.props.children
    }
}

export default ErrorBoundry
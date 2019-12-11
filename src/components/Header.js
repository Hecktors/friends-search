import React, { Component } from 'react'

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return <h1 className="ma0 p0 f2 f1-ns white">Find your Friend!</h1>    }
}

export default Header 

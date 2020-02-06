import React, { Component } from 'react'

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return <h1 className="header ma0 mv2 mv4-ns pa0 f2 f1-ns white">Find your Friend!</h1>    }
}

export default Header 

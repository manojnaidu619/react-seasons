import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        console.log("From constructor")
        this.state = {lat: 'loading...', errorMessage: ''}
    }

    componentDidMount(){
        console.log("From component did mount")
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (error) => this.setState({errorMessage: error.message})
        )
    }

    componentDidUpdate(){
        console.log("From component did update")
    }

    render(){
        console.log("From render")
        return (<div>
            <h3>{this.state.errorMessage}</h3>
            Latitude : {this.state.lat}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
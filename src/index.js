import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {lat: 'loading...', errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({lat: position.coords.latitude})
            },
            (error) => this.setState({errorMessage: error.message})
        )
    }

    render(){
        return (<div>
            <h3>{this.state.errorMessage}</h3>
            Latitude : {this.state.lat}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
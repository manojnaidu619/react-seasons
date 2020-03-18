import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{
    state = {lat: 'loading...', errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (error) => this.setState({errorMessage: error.message})
        )
    }

    render(){
        return (<div>
                <h3>{this.state.errorMessage}</h3>
                <SeasonDisplay lat={this.state.lat} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
import React from 'react'
import './SeasonDisplay.css'

const SeasonConfig = {
    summer: {
        text: "Let's hit the Beach! .. It's summer time",
        iconName: "sun"
    },
    winter: {
        text: "Burr.. It's cold",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? "summer" : "winter"
    }else{
        return lat < 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = SeasonConfig[season]

    return(
        <div className={`season-display ${season}`}>
            <i className={`left-icon massive ${iconName} icon`}></i>
            <h1 className="season-text">{text}</h1>
            <i className={`right-icon massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay
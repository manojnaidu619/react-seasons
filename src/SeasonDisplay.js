import React from 'react'

const SeasonConfig = {
    summer: {
        text: "Let's hit the Beach!",
        iconName: "icon sun"
    },
    winter: {
        text: "Burr.. It's cold",
        iconName: "icon snowflake"
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
        <div>
            <i className={iconName}></i>
            <h1>{text}</h1>
            <i className={iconName}></i>
        </div>
    )
}

export default SeasonDisplay
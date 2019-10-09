import React from 'react';


const Day = ({weekday,humidityIcon,humidity,temperatureIcon,temperature,maxTemp}) => (<div className="row">
                    <div>{weekday}</div>
                    <div><i className={`fas ${humidityIcon}`} ></i> {humidity}%</div>
                    <div><i className={`fas ${temperatureIcon}`}></i></div>
                    <div>{temperature}°C</div>
                    <div>
                        <div className="container-line">
                            <div className="dashed"></div>
                            <div className="solid-grey"></div>
                            <div className="solid-red"></div>
                        </div>
                    </div>
                    <div>{maxTemp}°C</div>
                </div>)


const Chart = ({days}) => {
    return (
        <div>
            {days.map( ({
                weekday,
                humidityIcon,
                humidity,
                temperatureIcon,
                temperature,
                maxTemp
                })=>(
                <Day key={weekday} weekday={weekday}
                 humidityIcon={humidityIcon} 
                 humidity={humidity} 
                 temperatureIcon={temperatureIcon} 
                 temperature={temperature}
                 maxTemp={maxTemp} 
                  />) ) }                
        </div>
    )
}

export default Chart;
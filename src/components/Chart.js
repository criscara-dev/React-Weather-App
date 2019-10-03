import React from 'react';
// const days = [
//     {weekday:'Monday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'26'},
//     {weekday:'Tuesday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'22'},
//     {weekday:'Wednesday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'15',maxTemp:'26'},
//     {weekday:'Thurday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'14',maxTemp:'25'},
//     {weekday:'Friday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'19',maxTemp:'26'},
//     {weekday:'Saturday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'19',maxTemp:'28'},
//     {weekday:'Sunday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'25'}
// ]

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
            {days.map( ({weekday,humidityIcon,humidity,temperatureIcon,temperature,maxTemp})=>(<Day weekday={weekday} humidityIcon={humidityIcon} humidity={humidity} temperatureIcon={temperatureIcon} temperature={temperature} maxTemp={maxTemp} />) ) }
            {/* <div className="row">
                    <div>Monday</div>
                    <div><i className="fas fa-tint"></i> 54%</div>
                    <div><i className="fas fa-sun"></i></div>
                    <div>17&#176;C</div>
                    <div>
                        <div className="container-line">
                            <div className="dashed"></div>
                            <div className="solid-grey"></div>
                            <div className="solid-red"></div>
                        </div>
                    </div>
                    <div>26&#176;C</div>
                    <div className="popUp">
                        <div className="item">
                            <div>10AM</div>
                            <div><i className="fas fa-cloud-showers-heavy"></i></div>
                            <div>24&#176;C</div>
                        </div>
                        <div className="item">
                            <div>12AM</div>
                            <div><i className="fas fa-cloud-showers-heavy"></i></div>
                            <div>26&#176;C</div>
                        </div>
                        <div className="item item-blue">
                            <div>2PM</div>
                            <div><i className="fas fa-tint"></i> </div>
                            <div>26&#176;C</div>
                        </div>
                        <div className="item">
                            <div>4PM</div>
                            <div><i className="fas fa-cloud-showers-heavy"></i></div>
                            <div>26&#176;C</div>
                        </div>
                    </div>
                </div> */}
                
        </div>
    )
}

export default Chart;
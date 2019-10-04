import React from 'react';

const TodayData = ({todayIcon,weekDay,dayMonth,todayDeg,activeCity,activeCountry,activeFeel,activeSunset}) => (<div>
    <section className="today">
                    <article>
                        <div className="aside__today--article">
                            <div className="aside__today--date1">
                                <i className={`fas ${todayIcon}`}></i>
                            </div>
                            <div className="aside__today--date2">
                                <h6>Today</h6>
                                <h6 className="aside__today--lightfont">{weekDay}, {dayMonth}</h6>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="data__2">
                <div className="aside__today--degree">
                    <div>{todayDeg} </div>
                    <div className="degree">°C</div>
                </div>
                <div>
                    <div className="aside__today__2--location">{activeCity}, {activeCountry}</div>
                    <br/>
                    <div className="aside__today__2--felt">Feels like {activeFeel}°C - Sunset {activeSunset}</div>
                </div>
            </section>
</div>)

 const CentralView = ({allTodayData}) => {
    return (
        <div>
            {allTodayData.map(  ({todayIcon,weekDay,dayMonth,todayDeg,activeCity,activeCountry,activeFeel,activeSunset})=>(
            <TodayData todayIcon={todayIcon} 
                        weekDay={weekDay} 
                        dayMonth={dayMonth} 
                        todayDeg={todayDeg} 
                        activeCity={activeCity}
                        activeCountry={activeCountry}
                        activeFeel={activeFeel}
                        activeSunset={activeSunset} />) ) }
                        
            <section className="data_3">
                <div id="title-chart">Chance of rain</div>
                <br />
                <div id="chart-area">
                    <div id="dayType">
                        <div>sunny</div>
                        <div>rainy</div>
                        <div>heavy<br /> rain</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-1'></div>
                        <div>10AM</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-2'></div>
                        <div>12AM</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-3'></div>
                        <div>2PM</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-4'></div>
                        <div>4PM</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-5'></div>
                        <div>6PM</div>
                    </div>
                    <div className="chart">
                        <div className='chart-bar bar-6'></div>
                        <div>8PM</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CentralView;
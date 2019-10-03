import React from 'react'

export default function CentralView() {
    return (
        <div>
            <section className="today">
                <article>
                    <div className="aside__today--article">
                        <div className="aside__today--date1">
                            <i className="fas fa-cloud-rain"></i>
                        </div>
                        <div className="aside__today--date2">
                            <h6>Today</h6>
                            <h6 className="aside__today--lightfont">Sat, 3 Aug</h6>
                        </div>
                    </div>
                </article>
            </section>
            <section className="data__2">
                <div className="aside__today--degree">
                    <div>28</div>
                    <div className="degree">&#176;C</div>
                </div>
                <div>
                    <div className="aside__today__2--location">Berlin, Germany</div>
                    <br/>
                    <div className="aside__today__2--felt">Feels like 32 <span className="dot">&#8226;</span>Sunset 20:15</div>
                </div>
            </section>
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

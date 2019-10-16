import React from 'react'

export default function WeeklyForecast({main,listDT}) {
    return (
        <div>
            {main}
            <div style={{textAlign:'center'}}>
            <h2>Forecast next 5 days:</h2>
           {listDT}
        </div>
        </div>
    )
}

WeeklyForecast.defaultProps = {
    listDT:'default text for 5 days forecast...'
}
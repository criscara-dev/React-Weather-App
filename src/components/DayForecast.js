import React from 'react';

const DayForecast = ({listDT}) => {
    return (
        <div style={{textAlign:'center'}}>
            <h2>Forecast next 12 hrs:</h2>
           {listDT}
        </div>
    )
}

DayForecast.defaultProps = {    
    listDT:'default text...'
}

export default DayForecast;
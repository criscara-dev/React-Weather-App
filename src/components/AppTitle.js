import React from 'react';

const AppTitle = () => {
const forecastStyle = {
    margin: '1rem 0',
    fontSize: '1.25rem',
    fontWeight: '300',
    color: '#110E3C'
}

    return (
        <div style={forecastStyle} >
             Weather <span style={{fontWeight:'700'}}>Forecast</span> 
        </div>
    )
}

export default AppTitle;

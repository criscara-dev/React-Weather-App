import React from 'react';

//components
import LoginArea from "../components/LoginArea";
import CentralView from "../components/CentralView";

class AsideView extends React.Component {
    state = {
        allTodayData:[
            {todayIcon:'fa-cloud-rain',weekDay:'Sat',dayMonth:'3 Aug',todayDeg:'28',activeCity:'Berlin',activeCountry:'Germany', activeFeel:'32',activeSunset:'20:15'}
        ]
    }
    render(){
        return(
            <div className='asideStyle' >
                <LoginArea />
                <CentralView allTodayData={this.state.allTodayData} />
            </div>
        )
    }
  
}

export default AsideView;
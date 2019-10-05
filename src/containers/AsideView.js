import React from 'react';
// import axios from 'axios';

//components
// import LoginArea from "../components/LoginArea";
import CentralView from "../components/CentralView";

class AsideView extends React.Component {
    
    state = {
        allTodayData:[
            {todayIcon:'fa-cloud-rain',weekDay:'Sat',dayMonth:'3 Aug',todayDeg:'28',activeCity:'Berlin',activeCountry:'Germany', activeFeel:'32',activeSunset:'20:15'}
        ],
        lat: null,
        lon: null,
        errMessage: '',
        weather:''
    }

componentDidMount() {
         
    window.navigator.geolocation.getCurrentPosition(
        position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      },(err)=>{
          this.setState({
              errMessage:err.message
          })
      } );

    //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=dcc4ba580205eb4e86efb0c560cc0b95`)
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ weather: data.name })
    //     })
    //     .catch(console.log)

    // add the parameter to API call:
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}`,{
    //   headers: {
    //     Authorization:'Client-ID dcc4ba580205eb4e86efb0c560cc0b95'
    //   }
    // }).then(
    //   response => console.log(response)
    // )

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=45.050265599999996&lon=10.911743999999999&appid=dcc4ba580205eb4e86efb0c560cc0b95')
        .then(res => res.json())
        .then((data) => {
          this.setState({ weather: data.name })
        })
        .catch(error => console.log('error in fetching and parsing data', error) )
    

      
}

    render(){
        console.log(this.state.weather);
        // let weather = this.state.weather;
        return(
            <div className='asideStyle' >
                Lat is: {this.state.lat} and long: {this.state.lon} <br/>{this.state.errMessage}
                <br />
                {/* {weather.map( item =>(<h2>{item.description}</h2>) )} */}
                {this.state.weather}

                {/* <LoginArea /> */}
                <CentralView allTodayData={this.state.allTodayData} />
            </div>
        )
    }
  
}

export default AsideView;
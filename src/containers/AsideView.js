import React from 'react';
import openweathermap from '../api/openweathermap';

//components
// import LoginArea from "../components/LoginArea";
import CentralView from "../components/CentralView";

class AsideView extends React.Component {
    
    state = {
        allTodayData:[
            {todayIcon:'fa-cloud-rain',weekDay:'Sat',dayMonth:'3 Aug',todayDeg:'28',activeCity:'Berlin',activeCountry:'Germany', activeFeel:'32',activeSunset:'20:15'}
        ],
        lat: 0,
        lon: 0,
        errMessage: '',
        weather:[],
        name:''
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

 
      // trying to use dynamic data...
    // const getPosition= (lat,lon)=>{ fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=dcc4ba580205eb4e86efb0c560cc0b95`)
    const getPosition= ()=>{fetch('http://api.openweathermap.org/data/2.5/weather?lat=51.6513792&lon=-0.0827392&appid=dcc4ba580205eb4e86efb0c560cc0b95')
        .then(res => res.json())
        .then((data) => {
          this.setState({ weather: data.weather, name:data.name })
        })
        .catch(error => console.log('error in fetching and parsing data', error) )
    }
    getPosition()


    // 2. trying to use axios...
//     getData = async (lat,lon) => { const response = await openweathermap.get(`/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=dcc4ba580205eb4e86efb0c560cc0b95`)
//     .then(
//     response => {
//       this.setState({ weather: response.weather, name:response.name })
//     }
//   )
//   .catch(error => {
//       console.log('Error', error);
//     });
//     }

}


    render(){
        // console.log(this.state.weather);
        let weather = this.state.weather;

        return(
            <div className='asideStyle' >
                Lat is: {this.state.lat} and long: {this.state.lon} <br/>{this.state.errMessage}
                <br />
                {weather.map( item =>(<h2 key={item.id}>{item.main}{item.description}</h2>) )}
               <br />
                {this.state.name}

                {/* <LoginArea /> */}
                <CentralView allTodayData={this.state.allTodayData} />
            </div>
        )
    }
  
}

export default AsideView;
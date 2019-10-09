import React from 'react';
import axios from 'axios';

//components
// import LoginArea from "../components/LoginArea";
import CentralView from "../components/CentralView";

class AsideView extends React.Component {
    
    state = {
        latitude: 0,
        longitude: 0,
        errMessage: '',
        weather:[],
        name:'',
        temperature:0,
        sunset:0
    }

componentDidMount() {
    const getLocation = async position => {
        try {
            let { latitude, longitude } = position.coords;
            const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const response = await axios.get(link);
            console.log(response.data);
            this.setState({
                weather: response.data.weather,
                latitude,
                longitude,
                temperature: response.data.main.temp,
                sunset: response.data.sys.sunset
              })
        } catch (err) {
            handleError();
        }
    }

    const handleError = () => this.setState({ errMessage:true });
         
    window.navigator.geolocation.getCurrentPosition(getLocation, handleError);

}


    render(){
        // console.log(this.state.weather);
        let weather = this.state.weather;

        return(
            <div className='asideStyle' >
                Lat is: {this.state.latitude} and long: {this.state.longitude} <br/>{this.state.errMessage}
                <br />
                {weather.map( item =>(
                    <h2 key={item.id}>
                        {item.main}
                        {item.description}
                        </h2>
                    ) )}
               <br />
                {this.state.name}
                {/* <LoginArea /> */}
                <CentralView 
                    allTodayData={this.state.allTodayData}
                    weather={this.state.weather}
                    temperature={this.state.temperature}
                    sunset={this.state.sunset}
                />
            </div>
        )
    }
}

export default AsideView;
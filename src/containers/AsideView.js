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
        icon:'',
        temperature:0,
        sunrise:0,
        sunset:0,
        name:'',
        country:'',
        main:'',
        desc:''
    }

componentDidMount() {
    const getLocation = async position => {
        try {
            let { latitude, longitude } = position.coords;
            const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const response = await axios.get(link);
            console.log(response.data);
            this.setState({
                latitude,
                longitude,
                weather: response.data.weather,
                main: response.data.weather[0].main,
                desc: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temperature: response.data.main.temp,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                name:response.data.name,
                country:response.data.sys.country
              })
        } catch (err) {
            handleError();
        }
    }

    const handleError = () => this.setState({ errMessage:true });
         
    window.navigator.geolocation.getCurrentPosition(getLocation, handleError);

}


    render(){
        
        let weather = this.state.weather;

        return(
            <div className='asideStyle' >
               <br />
               {/* {weather.map( item =>(
                    <div key={item.id} style={{textAlign:'center'}}>
                        <h2 >
                        {item.main}
                        </h2>
                        <h4>
                            {item.description}
                        </h4>
                    </div>
                    ) )} */}
                <CentralView 
                    main={this.state.main}
                    desc={this.state.desc}
                    allTodayData={this.state.allTodayData}
                    weather={this.state.weather}
                    temperature={this.state.temperature}
                    icon={this.state.icon}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    name={this.state.name}
                    country={this.state.country}
                />
            </div>
        )
    }
}

export default AsideView;
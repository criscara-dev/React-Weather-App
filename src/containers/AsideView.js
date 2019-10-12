import React from 'react';
import axios from 'axios';

//components
import CentralView from "../components/CentralView";
import DayForecast from "../components/DayForecast";

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
        desc:'',
        listDT:[]
    }

componentDidMount() {
    const getLocation = async position => {
        try {
            let { latitude, longitude } = position.coords;
            const baseURL = "http://api.openweathermap.org/data/2.5/";
            const link = `${baseURL}weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const response = await axios.get(link);
            const linkForecast = `${baseURL}forecast?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const responseF = await axios.get(linkForecast);
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
                country:response.data.sys.country,
                listDT: responseF.data.list
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
        let listDT = this.state.listDT;
        return(
            <div className='asideStyle' >
               <br />
               {/* {weather.map( item =>(
                    <div key={item.id} style={{textAlign:'center'}}>
                        <h2>
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
                <DayForecast 
                //     listDT={listDT.map( hourForecast => (
                // <div key={hourForecast.dt}>{hourForecast.dt_txt}</div>
                // ) ) } 
                listDT={listDT.map( hourForecast => (
                    <div key={hourForecast.dt}>{hourForecast.dt_txt}</div>
                    ) ) } 
                />
            </div>
        )
    }
}

export default AsideView;
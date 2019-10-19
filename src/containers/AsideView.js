import React from 'react';
import axios from 'axios';

//components
import CentralView from "../components/CentralView";
import DayForecast from "../components/DayForecast";
import moment from 'moment';
import Chart from '../components/Chart';


// base URL FOR API call
const baseURL = "http://api.openweathermap.org/data/2.5";

class AsideView extends React.Component {
    state = {
        latitude: 0,
        longitude: 0,
        errMessage: '',
        icon:'',
        temperature:0,
        sunrise:0,
        sunset:0,
        name:'',
        country:0,
        humidity:0,
        pressure:'',
        main:'',
        desc:'',
        listDT:[],
        chartData:[]
    }

    // getChartData(){
    //     this.setState({
    //         chartData:{
    //             labels:['9:00','12:00','15:00', '18:00', '21:00'],
    //             datasets:[
    //                 {
    //                     label:'Temperature',
    //                     data:[
    //                         164356,
    //                         261656,
    //                         234132,
    //                         322764,
    //                         343243,
    //                         224434,
    //                     ],
    //                     backgroundColor:'rgba(255, 99, 132, 0.6)'
    //                 }
    //             ]
    //         }
    //     })
    // }

    getCurrentWeather = async (latitude,longitude) => {
        const link = `${baseURL}/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
        const response = await axios.get(link);
        this.setState({
            latitude,
            longitude,
            main: response.data.weather[0].main,
            desc: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            name:response.data.name,
            country:response.data.sys.country,
            humidity:response.data.main.humidity,
            pressure:response.data.main.pressure,
          })
    }
    
    getForecast =  async (latitude,longitude) => {
        const link = `${baseURL}/forecast?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
        const response = await axios.get(link);
        this.setState({
            chartData: response.data.list
          })
    }

componentDidMount() {
    const getLocation = async position => {
        try {
            let { latitude, longitude } = position.coords;
            this.getCurrentWeather(latitude, longitude);
            this.getForecast(latitude, longitude);
            
        } catch (err) {
            handleError();
        }
    }

    const handleError = () => this.setState({ errMessage:true });
        
    window.navigator.geolocation.getCurrentPosition(getLocation, handleError);

}


    render(){
        
        const {chartData} = this.state;
        return(
            <div className='asideStyle' >
               <br />
                <CentralView 
                    main={this.state.main}
                    desc={this.state.desc}
                    allTodayData={this.state.allTodayData}
                    temperature={this.state.temperature}
                    icon={this.state.icon}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    name={this.state.name}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                />
                <br />
                <DayForecast 
                    listDT={chartData.slice(0,5).map( (hourForecast,index) => (
                <div key={hourForecast.dt}>
                    {moment(hourForecast.dt_txt).format('LT')}
                    <br />
                    {(hourForecast.main.temp - 273).toFixed(1)}
                    </div>
                )  ) }
                />
               <Chart chartData={this.state.chartData} />
            </div>
        )
    }
}

export default AsideView;
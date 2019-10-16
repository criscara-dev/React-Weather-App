import React from 'react';
import axios from 'axios';

//components
<<<<<<< HEAD
import CentralView from "../components/CentralView";
import DayForecast from "../components/DayForecast";
import moment from 'moment';
import ChartAside from '../components/ChartAside';

class AsideView extends React.Component {
=======
// import LoginArea from "../components/LoginArea";
import CentralView from "../components/CentralView";

class AsideView extends React.Component {
    
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
    state = {
        latitude: 0,
        longitude: 0,
        errMessage: '',
<<<<<<< HEAD
=======
        weather:[],
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
        icon:'',
        temperature:0,
        sunrise:0,
        sunset:0,
        name:'',
<<<<<<< HEAD
        country:0,
        humidity:0,
        pressure:'',
        main:'',
        desc:'',
        listDT:[],
        chartData:{}
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
            chartData:{
                labels:['9:00','12:00','15:00', '18:00', '21:00'],
                datasets:[
                    {
                        label:'Temperature',
                        data:[
                            164356,
                            261656,
                            234132,
                            322764,
                            343243,
                            224434,
                        ],
                        backgroundColor:'rgba(255, 99, 132, 0.6)'
                    }
                ]
            }
        })
=======
        country:'',
        main:'',
        desc:''
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
    }

componentDidMount() {
    const getLocation = async position => {
        try {
            let { latitude, longitude } = position.coords;
<<<<<<< HEAD
            // const baseURL = "http://api.openweathermap.org/data/2.5/";
            const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const response = await axios.get(link);
            const linkForecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const responseF = await axios.get(linkForecast);
            console.log('response',response.data);
            console.log('responseF',responseF.data);
            this.setState({
                latitude,
                longitude,
=======
            const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
            const response = await axios.get(link);
            console.log(response.data);
            this.setState({
                latitude,
                longitude,
                weather: response.data.weather,
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
                main: response.data.weather[0].main,
                desc: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temperature: response.data.main.temp,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                name:response.data.name,
<<<<<<< HEAD
                country:response.data.sys.country,
                humidity:response.data.main.humidity,
                pressure:response.data.main.pressure,
                listDT: responseF.data.list
=======
                country:response.data.sys.country
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
              })
        } catch (err) {
            handleError();
        }
    }

    const handleError = () => this.setState({ errMessage:true });
         
    window.navigator.geolocation.getCurrentPosition(getLocation, handleError);

}


    render(){
        
<<<<<<< HEAD
        let listDT = this.state.listDT;
        return(
            <div className='asideStyle' >
               <br />
=======
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
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
                <CentralView 
                    main={this.state.main}
                    desc={this.state.desc}
                    allTodayData={this.state.allTodayData}
<<<<<<< HEAD
=======
                    weather={this.state.weather}
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
                    temperature={this.state.temperature}
                    icon={this.state.icon}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    name={this.state.name}
                    country={this.state.country}
<<<<<<< HEAD
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                />
                <br />
                <DayForecast 
                    listDT={listDT.slice(0,5).map( (hourForecast,index) => (
                <div key={hourForecast.dt}>
                    {moment(hourForecast.dt_txt).format('LT')}
                    <br />
                    {(hourForecast.main.temp - 273).toFixed(1)}
                    </div>
                )  ) }
                />
               <ChartAside chartDa={this.state.chartData} legendPosition='bottom' />
=======
                />
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
            </div>
        )
    }
}

<<<<<<< HEAD

=======
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
export default AsideView;
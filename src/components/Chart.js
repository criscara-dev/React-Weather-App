import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';


// chartData: {
        //     labels:['Milan','London','Rome', 'Berlin', 'Dublin'],
        //     datasets:[
        //         {
        //             label:'Population',
        //             data:[
        //                 164356,
        //                 261656,
        //                 234132,
        //                 322764,
        //                 343243,
        //                 224434,
        //             ],
        //             backgroundColor:[
        //                 'rgba(255, 99, 132, 0.6)',
        //                 'rgba(54, 162, 235, 0.6)',
        //                 'rgba(255, 206, 86, 0.6)',
        //                 'rgba(153, 102, 255, 0.6)',
        //                 'rgba(255, 99, 132, 0.6)',
        //             ]
        //         }
        //     ]
        // }

export default class Chart extends Component {

static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right'
}


    render() {
        let data = this.props.chartData;
        
        return (
            <div>
                <Bar
                    data={data}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Forecast next hours',
                            fontSize:25
                        },
                    legend:{
                        display:this.props.displayLegend,
                       position:this.props.legendPosition
                    }
                    }}
                    />
            </div>
        )
    }
}


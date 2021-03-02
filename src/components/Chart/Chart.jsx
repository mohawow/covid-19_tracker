import {useState, useEffect} from "react";
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

function Chart() {

  const [dailyDate, setDailyData] = useState([])
  
  useEffect(() =>{
    const fetchAPI = async () =>{
      setDailyData(await fetchDailyData())
    }  

    fetchAPI();
  });

  const linechart = (
    dailyDate.length 
    ?(
    <Line 
      data={{
        labels: dailyDate.map(({date}) => date),
        datasets: [{
          data: dailyDate.map(({confirmed}) => confirmed),
          label: 'Infected',
          borderColor:'#3333ff',
          fill: true,
        },{
          data: dailyDate.map(({deaths}) => deaths),
          label: 'deaths',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        }]
      }}
    />) : null
  );

  return(
    <div className={styles.container}>
      {linechart}
    </div>
  )
}

export default Chart;

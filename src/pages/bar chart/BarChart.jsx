import Bar from '../../components/Bar'
import React from 'react'
import Header from "../../components/Header";


function BarChart() {
  return (
    <div>
<Header title={"Bar Chart"} subTitle={"The minimum Wage in Germany,France and Spain (EUR/Month)"} isDashboard={true}/>

      <Bar/>
    </div>
  )
}

export default BarChart

import Line from '../../components/Line'
import React from 'react'
import Header from "../../components/Header";

function LineChart() {
  return (
    <div>
            <Header title={"Line Chart"} subTitle={"Simple Line Chart "} />

      <Line/>
    </div>
  )
}

export default LineChart

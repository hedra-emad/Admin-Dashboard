import Pie from '../../components/Pie'
import React from 'react'
import Header from "../../components/Header";

function PieChart() {
  return (
    <div>
            <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} />

      <Pie/>
    </div>
  )
}

export default PieChart

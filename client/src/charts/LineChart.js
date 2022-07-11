import React from 'react'
import "./styles.css";
import Chart from 'chart.js/auto'; //not read but required to solve category scale error
import { Line } from "react-chartjs-2";
import sampleData from './sample/sampleData'

const LineChart = () => {
  return (
    <div className="LineChart">
      <Line data={sampleData} />
    </div>
  )
}

export default LineChart
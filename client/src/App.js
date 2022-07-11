import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Benchmark from './components/Benchmark'
import LineChart from './charts/LineChart'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Benchmark />
      <Main />
      <LineChart />
    </div>
  )
}

export default App
import './App.css'
import { useEffect, useState } from 'react'
import { Chart } from './components/Chart'
import { getData } from './redux/action'
import { connect, useDispatch } from 'react-redux'

function App(props) {
  const data = props.data 
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("fetch called")
    const fetchPrices = () => {
      setChartData({
        labels: data && data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data && data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          },

        ]
      })
    }

    fetchPrices()
  }, [data, dispatch])

  const onCreate = async () => {
    dispatch(getData())
  }
  

  const [chartData, setChartData] = useState({labels: [], datasets: []})
  return (
    <div className="App">
      <div className='row col-4'>
        <button onClick={onCreate}>Get Data</button>
      </div>
      <div className='col-4'>
        <Chart chartData={chartData} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({data: state.data,})
const mapDispatchToProps = {
  getData: getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

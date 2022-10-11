import ChartBar from './ChartBar'
import './Chart.css'


const Chart = (props) =>{
  const values = props.dataPoints.map(dataPoint => dataPoint.value)
  const maxVal = Math.max(...values)

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint=>(
        <ChartBar 
          key={dataPoint.key}
          value={dataPoint.value} 
          maxValue={maxVal} 
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
import ChartBar from './ChartBar'
import './Chart.css'


const Chart = (props) =>{
  const values = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalExpense = values.reduce((val, acc) => val + acc, 0)

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint=>(
        <ChartBar 
          totalExpense = {totalExpense}
          key={dataPoint.key}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
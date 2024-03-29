import './ChartBar.css'

const ChartBar = (props) =>{

  let barHeight = '0%'
  if(props.totalExpense > 0){
    barHeight = Math.round((props.value/props.totalExpense)*100)+"%"
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barHeight}}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar
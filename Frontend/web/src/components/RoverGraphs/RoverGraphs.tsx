import './RoverGraphs.css'

const RoverGraphs = () => {
  return (
    <div id="rover-graphs">
      <div className="graph-container top">
        <div className="graph-title">Temperature</div>
        <div className="graph-units">&deg;C at minute intervals</div>
      </div>
      <div className="graph-container bottom">
        <div className="graph-title">Light Levels</div>
        <div className="graph-units">lux at minute intervals</div>
      </div>
    </div> 
  )
};

export default RoverGraphs;

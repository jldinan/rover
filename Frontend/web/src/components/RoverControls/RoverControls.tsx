import './RoverControls.css'

const RoverControls = () => {
  return (
    <>
      <div id="rover-direction-controls">
        <button className="forward"></button>
        <button className="left"></button>
        <button className="right"></button>
        <button className="backwards"></button>
      </div>    
    </>
  )
};

export default RoverControls;

import IconButton from '../Elements/Buttons/IconButton/IconButton';
import './RoverControls.css'

const RoverControls = () => {
  const handleClick = (direction: string) => {
    console.log(`Moving rover ${direction}`);
  };
  return (
    <>
      <div id="rover-direction-controls">
        <IconButton type="forward" onClick={() => handleClick("forward")} />
        <IconButton type="left" onClick={() => handleClick("left")} />
        <IconButton type="right" onClick={() => handleClick("right")} />
        <IconButton type="backwards" onClick={() => handleClick("backwards")} />
      </div>    
    </>
  )
};

export default RoverControls;

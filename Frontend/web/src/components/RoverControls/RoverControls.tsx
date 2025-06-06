import IconButton from '../Elements/Buttons/IconButton/IconButton';
import classes from './RoverControls.module.css'

const RoverControls = () => {
  const handleClick = (direction: string) => {
    console.log(`Moving rover ${direction}`);
  };
  return (
    <>
      <div className={`${classes['rover-direction-controls']}`}>
        <IconButton type="forward" onClick={() => handleClick("forward")} />
        <IconButton type="left" onClick={() => handleClick("left")} />
        <IconButton type="right" onClick={() => handleClick("right")} />
        <IconButton type="backwards" onClick={() => handleClick("backwards")} />
      </div>    
    </>
  )
};

export default RoverControls;

import IconButton, { ButtonTypes } from '../Elements/Buttons/IconButton/IconButton';
import classes from './RoverControls.module.css'

const RoverControls = () => {
  const handleClick = (direction: string) => {
    console.log(`Moving rover ${direction}`);
  };
  return (
    <>
      <div className={`${classes['rover-direction-controls']}`}>
        <IconButton type={ButtonTypes.ArrowUp} onClick={() => handleClick("forward")} />
        <IconButton type={ButtonTypes.ArrowLeft} onClick={() => handleClick("left")} />
        <IconButton type={ButtonTypes.ArrowRight} onClick={() => handleClick("right")} />
        <IconButton type={ButtonTypes.ArrowDown} onClick={() => handleClick("backwards")} />
      </div>    
    </>
  )
};

export default RoverControls;

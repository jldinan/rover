import classes from './RoverGraphs.module.css';

const RoverGraphs = () => {
  return (
    <div className={`${classes['rover-graphs']}`}>
      <div className={`${classes['graph-container']} ${classes['top']}`}>
        <div className={classes['graph-title']}>Temperature</div>
        <div className={classes['graph-units']}>&deg;C at minute intervals</div>
      </div>
      <div className={`${classes['graph-container']} ${classes['bottom']}`}>
        <div className={classes['graph-title']}>Light Levels</div>
        <div className={classes['graph-units']}>lux at minute intervals</div>
      </div>
    </div>
  );
};

export default RoverGraphs;
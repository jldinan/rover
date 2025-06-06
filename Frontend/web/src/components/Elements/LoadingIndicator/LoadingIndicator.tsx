import classes from './LoadingIndicator.module.css'

interface LoadingIndicatorProps {
  color: string;
  size?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ color, size = ""}) => {
  return (
    <div className={`${classes['loading-indicator-wrapper']}`}>
      <div className={`${classes['la-ball-newton-cradle']} ${size}`} style={{ color }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>    
  );
};

export default LoadingIndicator;
import './LoadingIndicator.css'

interface LoadingIndicatorProps {
  color: string;
  size?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ color, size = ""}) => {
  return (
    <div className="loading-indicator-wrapper">
      <div className={`la-ball-newton-cradle ${size}`} style={{ color }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>    
  );
};

export default LoadingIndicator;
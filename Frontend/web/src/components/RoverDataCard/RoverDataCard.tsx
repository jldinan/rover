import './RoverDataCard.css'

interface RoverDataCardProps {
  label: string;
  value?: number;
  unit: string;
}

const RoverDataCard: React.FC<RoverDataCardProps> = ({ label, value, unit }) => {
  return (
    <div className="stats-card">
      <div className="label">{label}</div>
      <div className="value">
        {value !== undefined && value !== null ? (
          <>
            {value}
            <span className="unit">{unit}</span>
          </>
        ) : (
          <span className="placeholder">--</span>
        )}
      </div>
    </div>
  );
};

export default RoverDataCard;
import classes from './RoverDataCard.module.css'

interface RoverDataCardProps {
  label: string;
  value?: number;
  unit: string;
}

const RoverDataCard: React.FC<RoverDataCardProps> = ({ label, value, unit }) => {
  return (
    <div className={`${classes['stats-card']}`}>
      <div className={`${classes['label']}`}>{label}</div>
      <div className={`${classes['value']}`}>
        {value !== undefined && value !== null ? (
          <>
            {value}
            <span className={`${classes['unit']}`}>{unit}</span>
          </>
        ) : (
          <span className={`${classes['placeholder']}`}>--</span>
        )}
      </div>
    </div>
  );
};

export default RoverDataCard;
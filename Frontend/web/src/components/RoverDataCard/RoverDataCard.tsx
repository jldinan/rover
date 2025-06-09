import classes from './RoverDataCard.module.css'

interface RoverDataCardProps {
  label: string;
  value?: number;
  unit: string;
}

const RoverDataCard: React.FC<RoverDataCardProps> = ({ label, value, unit }) => {
  const isValidValue = typeof value === 'number' && !isNaN(value);
  const valueAriaLabel = isValidValue
    ? `${label}: ${value} ${unit}`
    : `${label}: no data`;

  return (
    <div className={classes['stats-card']}>
      <div className={classes['label']}>{label}</div>
      <div className={classes['value']} aria-label={valueAriaLabel}>
        {isValidValue ? (
          <>
            {value}
            <span className={classes['unit']}>{unit}</span>
          </>
        ) : (
          <span className={classes['placeholder']}>--</span>
        )}
      </div>
    </div>
  );
};

export default RoverDataCard;
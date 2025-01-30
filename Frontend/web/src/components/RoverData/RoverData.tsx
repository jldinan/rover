import { EnvironmentalData } from '../../models/environmentalData';
import { TelemetryData } from '../../models/telemetryData';
import RoverDataCard from '../RoverDataCard/RoverDataCard';
import './RoverData.css'

interface RoverDataProps {
  environmentalData: EnvironmentalData | undefined;
  telemetryData: TelemetryData;
}

const RoverData: React.FC<RoverDataProps> = ({ environmentalData, telemetryData }) => {  
  return (
    <>
      <div id="data-stats">
        <div className="stats-card-wrapper">
          <RoverDataCard label="Temperature" value={environmentalData?.temperature} unit="&deg;C" />
          <RoverDataCard label="Humidity" value={environmentalData?.humidity} unit="% RH" />
          <RoverDataCard label="Air Pressure" value={environmentalData?.temperature} unit="hPa" />
          <RoverDataCard label="TVOC Levels" value={environmentalData?.temperature} unit="ppm" />
          <RoverDataCard label="Light Levels" value={environmentalData?.temperature} unit="lux" />
          <RoverDataCard label="Radiation" value={environmentalData?.temperature} unit="CPS" />
          <RoverDataCard label="Power Levels" value={telemetryData?.batteryLevel} unit="%" />
          <RoverDataCard label="Signal" value={telemetryData?.signalStrength} unit="%" />
        </div>
      </div>     
    </>
  )
};

export default RoverData;

import { EnvironmentalData } from '../../models/environmentalData';
import { TelemetryData } from '../../models/telemetryData';
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
          <div className="stats-card">
            <div className="label">Temperature</div>
            <div className="value">{environmentalData?.temperature ?? <span className="placeholder">--</span>}<span className="unit">&deg;C</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Humidity</div>
            <div className="value">{environmentalData?.humidity ?? <span className="placeholder">--</span>}<span className="unit">% RH</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Air Pressure</div>
            <div className="value">1020<span className="unit">hPa</span></div>
          </div>
          <div className="stats-card">
            <div className="label">TVOC Levels</div>
            <div className="value">120.6<span className="unit">ppm</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Light Levels</div>
            <div className="value">110.12<span className="unit">lux</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Radiation</div>
            <div className="value bad">5.8<span className="unit">CPS</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Power Levels</div> 
            <div className="value">{telemetryData?.batteryLevel ?? <span className="placeholder">--</span>}<span className="unit">%</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Signal</div>
            <div className="value good">{telemetryData?.signalStrength ?? <span className="placeholder">--</span>}<span className="unit">%</span></div>
          </div>
        </div>
      </div>     
    </>
  )
};

export default RoverData;

import { EnvironmentalData } from '../../services/environmentData.service';
import './RoverData.css'

interface RoverDataProps {
  environmentalData: EnvironmentalData;
}

const RoverData: React.FC<RoverDataProps> = ({ environmentalData }) => {  
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
            <div className="value">61.5<span className="unit">%</span></div>
          </div>
          <div className="stats-card">
            <div className="label">Signal</div>
            <div className="value good">88<span className="unit">%</span></div>
          </div>
        </div>
      </div>     
    </>
  )
};

export default RoverData;

import { useEffect, useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RoverControls from '../RoverControls/RoverControls';
import RoverData from '../RoverData/RoverData';
import RoverGraphs from '../RoverGraphs/RoverGraphs';
import VideoFeed from '../VideoFeed/VideoFeed';

import { getLatestEnvironmentalData } from '../../services/environmentData.service';
import { EnvironmentalData } from '../../models/environmentalData';
import { TelemetryData } from '../../models/telemetryData';

import './Dashboard.css'

const Dashboard = () => {

  const [environmentalData, setEnvironmentalData] = useState<EnvironmentalData>();
  const telemetryData: TelemetryData = {
    batteryLevel: 61.5,
    signalStrength: 77.6,
  };

  useEffect(() => {
    const fetchEnvironmentalData = async () => {
      try {
        const data = await getLatestEnvironmentalData();
        setEnvironmentalData(data);
      } catch (err) {
        //TODO: handle error state.
      }
    };
    fetchEnvironmentalData();
  }, []);

  return (
    <>
      <div id="dashboard">
        <div id="version-number">Version 1.0.0</div>
        <div id="connected-indicator"></div>
        <div id="connected-indicator-status">Connecting to server...</div>
        <div id="left-panel">
          <VideoFeed/>
          <RoverData environmentalData={environmentalData} telemetryData={telemetryData} />          
        </div>
        <div id="right-panel">
          <AppHeader/>
          <RoverGraphs/>
          <RoverControls/>
        </div>
      </div>
    </>
  )
};

export default Dashboard;

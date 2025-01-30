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
      <main id="dashboard">
        <section id="version-number">
          <div>Version 1.0.0</div>
        </section>

        <section id="connection-status">
          <div id="connected-indicator" role="status" aria-live="polite"></div>
          <div id="connected-indicator-status">Connecting to server...</div>
        </section>

        <section id="left-panel">
          <VideoFeed />
          <RoverData environmentalData={environmentalData} telemetryData={telemetryData} />
        </section>

        <section id="right-panel">
          <AppHeader />
          <RoverGraphs />
          <RoverControls />
        </section>
      </main>
    </>
  )
};

export default Dashboard;

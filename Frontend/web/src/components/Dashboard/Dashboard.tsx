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
  const [error, setError] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
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
        setError(true);
        setStatus("Failed to fetch environmental data.");
      }
    };
    fetchEnvironmentalData();
  }, []);

  return (
    <>
      <main id="dashboard">     
        <section id="left-panel">
          <VideoFeed />
          <RoverData environmentalData={environmentalData} telemetryData={telemetryData} />
        </section>

        <section id="right-panel">
          <AppHeader />
          <RoverGraphs />
          <RoverControls />
        </section>

        <footer id="taskbar" className={error ? "error" : ""}>
          {status && <div className="status-message">{status}</div>}
          <div id="connected-indicator" role="connection-status" aria-live="polite"></div>
          <div id="connected-indicator-status">Connecting to server...</div>
        </footer>
      </main>
    </>
  )
};

export default Dashboard;

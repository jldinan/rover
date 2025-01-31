import { useEffect, useState } from 'react';

import './Dashboard.css'
import AppHeader from '../AppHeader/AppHeader';
import RoverControls from '../RoverControls/RoverControls';
import RoverData from '../RoverData/RoverData';
import RoverGraphs from '../RoverGraphs/RoverGraphs';
import VideoFeed from '../VideoFeed/VideoFeed';
import StatusBar from '../StatusBar/StatusBar';

import { getLatestEnvironmentalData } from '../../services/environmentData.service';
import { EnvironmentalData } from '../../models/environmentalData';
import { TelemetryData } from '../../models/telemetryData';

const Dashboard = () => {
  const [error, setError] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
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
        setStatusMessage("Failed to fetch environmental data.");
      }
    };
    fetchEnvironmentalData();
  }, []);

  return (    
    <main id="dashboard">     
      <section id="left-panel">
        <VideoFeed />
        <RoverData
          environmentalData={environmentalData}
          telemetryData={telemetryData}
        />
      </section>

      <section id="right-panel">
        <AppHeader />
        <RoverGraphs />
        <RoverControls />
      </section>

      <StatusBar
        error={error}
        statusMessage={statusMessage}
        wsConnected={false}
        wsConnectionStatusMessage="Connecting to server..."
      />        
    </main>    
  )
};

export default Dashboard;

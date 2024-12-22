import AppHeader from '../AppHeader/AppHeader';
import RoverControls from '../RoverControls/RoverControls';
import RoverData from '../RoverData/RoverData';
import RoverGraphs from '../RoverGraphs/RoverGraphs';
import VideoFeed from '../VideoFeed/VideoFeed';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div id="dashboard">
        <div id="version-number">Version 1.0.0</div>
        <div id="connected-indicator"></div>
        <div id="connected-indicator-status">Connecting to server...</div>
        <div id="left-panel">
          <VideoFeed/>
          <RoverData/>          
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

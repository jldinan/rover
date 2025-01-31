import './StatusBar.css'

interface StatusBarProps {
  error: boolean;
  statusMessage?: string | null;
  wsConnectionStatusMessage: string;
  wsConnected: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ error = false, statusMessage = "", wsConnected = true, wsConnectionStatusMessage = "" }) => {
  return (
    <footer id="status-bar" className={error ? "error" : ""}>
      {statusMessage && <div className="status-message">{statusMessage}</div>}
      <div id="connected-indicator" role="connection-status" aria-live="polite" className={wsConnected ? "connected" : ""}></div>
      <div id="connected-indicator-status">{wsConnectionStatusMessage}</div>
    </footer>
  );
};

export default StatusBar;
import IconButton from '../Elements/Buttons/IconButton/IconButton';
import './AppHeader.css'

const AppHeader = () => {
  const showHelp = () => {
    console.log(`Help`);
  };
  return (
    <div id="app-header">
      <IconButton type="help" onClick={() => showHelp()} width="45px" height="45px" />
    </div> 
  )
};

export default AppHeader;

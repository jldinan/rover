import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div id="dashboard">

        <div id="connected-indicator"></div>

        <div id="left-panel">
          <div id="video-feed">
            <div id="crosshairs"></div>

            <div id="compass">
              <div className="points">
                <div className="point">N</div>
                <div className="point">15</div>
                <div className="point">30</div>
                <div className="point">NE</div>
                <div className="point">60</div>
                <div className="point">75</div>
                <div className="point">E</div>
                <div className="point">105</div>
                <div className="point">120</div>
                <div className="point">SE</div>
                <div className="point">150</div>
                <div className="point">165</div>
                <div className="point">S</div>
                <div className="point">195</div>
                <div className="point">210</div>
                <div className="point">SW</div>
                <div className="point">240</div>
                <div className="point">255</div>
                <div className="point">W</div>
                <div className="point">285</div>
                <div className="point">300</div>
                <div className="point">NW</div>
                <div className="point">330</div>
                <div className="point">345</div>
                <div className="point">N</div>
              </div>
            </div>





          </div>
          <div id="data-stats">

            <div className="stats-card-wrapper">
              <div className="stats-card">
                <div className="label">Temperature</div>
                <div className="value">25.2<span className="unit">&deg;C</span></div>

              </div>
              <div className="stats-card">
                <div className="label">Humidity</div>
                <div className="value">70.33<span className="unit">% RH</span></div>
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
                <div className="label">Signal Strength</div>
                <div className="value good">88<span className="unit">%</span></div>
              </div>
            </div>

            
          </div>
        </div>

        <div id="right-panel">
          <div id="rover-controls">

          </div>
          <div id="rover-direction-controls">
            <button className="forward"></button>
            <button className="left"></button>
            <button className="right"></button>
            <button className="backwards"></button>
          </div>


        </div>
        
  
      </div>
      <div className="card">

      </div>
    </>
  )
}

export default App

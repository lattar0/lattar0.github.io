import { useEffect } from 'react';

import startMenuIcon from '../assets/icons/startmenu.png';
import volumeIcon from '../assets/icons/volume.png';

import '../styles/footer.scss';

export function Footer() {

  useEffect(() => {
    const clock = () => {
      const pad = (num) => num.toString().padStart(2, 0)
    
      const date = new Date()
      const hrs = date.getHours()
      const mins = date.getMinutes()
    
      const time = `${pad(hrs)}:${pad(mins)}`
    
      document.getElementById("hour").innerHTML = time
      setTimeout(clock, 1000)
    }
    
    clock()
  });
  
  return (
    <footer>
      <label htmlFor="startmenu">
        <img src={startMenuIcon} alt="Icon for Start Menu"/>
        <span>Start</span>
      </label>

      <input type="checkbox" id="startmenu" />

      <div className="startmenu">
        <div className="logo-left-side">
          <strong>Shaun <span>95</span> </strong>
        </div>

        <ul>
          <li>Programs</li>
          <li>Documents</li>
          <li>Settings</li>
          <li>Find</li>
          <li>Help</li>
          <li>Run</li>
          <li>Shut down...</li>
        </ul>
      </div>

      <div className="clock">
        <img src={volumeIcon} alt="Volume icon"/>
        <span id="hour" />
      </div>
    </footer>
  )
}
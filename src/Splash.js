import {Link} from 'react-router-dom'
import ninjavidsmall from './images/ninjavidsmall.webm'

function Splash() {
  return (
    <div className="Splash">
      
      <div className='splashBox'>
  <h1>KAWASAKI</h1>
  <h2>Let the good times roll</h2>
  <h2><Link to="/catalog/allbikes">FIND YOUR RIDE TODAY</Link></h2>
</div>
<video className="splashVideo" src={`${ninjavidsmall}`} autoPlay loop muted={true}></video>
    </div>
  );
}

export default Splash;

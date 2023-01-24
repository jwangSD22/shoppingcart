import {Link,useNavigate} from 'react-router-dom'
import ninjavidsmall from './images/ninjavidsmall.webm'

function Splash() {
  const navigate = useNavigate()
const splashStyle = {
  fontSize:'50px',
  color:'white'
}


  return (
    <div className="Splash">
      
      <div className='splashBox'>
  <h1>KAWASAKI</h1>
  <h2>Let the good times roll</h2>
  <div className='splashLink' onClick={()=>navigate("/catalog/allbikes")}>FIND YOUR RIDE TODAY!</div>
</div>
<video className="splashVideo" src={`${ninjavidsmall}`} autoPlay loop muted={true}></video>
    </div>
  );
}

export default Splash;

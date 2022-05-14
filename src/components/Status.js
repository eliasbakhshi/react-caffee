import droneIcon from '../graphics/drone.svg';
import { Link, useLocation } from 'react-router-dom';

const Status = () => {
  const orderNum = "#324234";
  const minutesLeft = 10;
  const location = useLocation();
  
  console.log(location.state)
  return(
    <>
    <section className="frame status">
      <span>Ordernummer <strong>{location.state.orderNr}</strong></span>
      <img src={droneIcon} alt=""/>
      <h2>Din beställning är på väg!</h2>
      <p><strong>{ location.state.time }</strong> minuter</p>
      <Link to="/" >Ok, cool!</Link>
    </section>
    </>
  );
  }
  
  export default Status;
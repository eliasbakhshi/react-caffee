import graphicsRight from '../graphics/intro-graphic-right.svg';
import graphicsLeft from '../graphics/intro-graphic-left.svg';
import logo from '../graphics/airbean-landing.svg';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/menu');
  }, 2000);
return(
  <>
  <section className="frame landing-page">
    <img src={logo} className="22" alt="logo" />
    <img className='bg-right' src={ graphicsRight } alt="" />
    <img className='bg-left' src={graphicsLeft} alt="" />
  </section>
  </>
);
}

export default LandingPage;
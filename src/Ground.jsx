import './App.css'
import './footer.css'
import Navlist from './component/Navlist';
import First from './component/first';
import NavLogo from './component/Navlogo';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from './component/footer';
import pic from './assets/kaplan1.jpg';
import Second from './component/Second';
import Third from './component/Third';
import map from './assets/map_indo.png';
import flag from './assets/indo-flag.jpg';
import detail1 from './assets/kaplan2.jpg';
import detail2 from './assets/kaplan3.jpg';
import detail3 from './assets/kaplan4.png';
import Fourth from './component/Fourth';

function Ground() {
  const linklist = ["Plane", "Tank", "Warship"];
  // eslint-disable-next-line no-unused-vars
  
  const handlelogin = () => {
    console.log("event login trigger");
  }
  const navigate = useNavigate();
  const handleredirect = (item) => {
    const route = `/${item.toLowerCase()}`;
    navigate(route);
  }
  return (
    <>
      <div>
        <div className='navbar-wrapper'>
          <div className='navbar-container'>
            <NavLogo logo={logo} />
            <Navlist data={linklist} handleredirect={handleredirect} />
            <button onClick={handlelogin}>Login</button>
          </div>
        </div><br /><br />
        <div className='box'>
          <First pic={pic}/>
          <Second title = "Kaplan MT Harimau" content = "Kaplan MT or Harimau is a light tank jointly developed by Turkish manufacturer FNSS and Indonesian manufacturer Pindad. The development program name for the tank is Modern Medium Weight Tank (MMWT). The tank itself is called Kaplan MT by Turkey and Harimau by Indonesia, both meaning tiger" /> <br />
          <Third map = {map} flag = {flag}/>
          <Fourth detail1= {detail1} detail2= {detail2} detail3= {detail3} />
        </div>
      </div><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>
  )
}

export default Ground

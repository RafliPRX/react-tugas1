import './App.css'
import './footer.css'
import Navlist from './component/Navlist';
import First from './component/first';
import NavLogo from './component/Navlogo';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from './component/footer';
import pic from './assets/ijn_yamato.jpg';
import Second from './component/Second';
import Third from './component/Third';
import map from './assets/map_japan.jpg';
import flag from './assets/japan_flag.jpg';
import detail1 from './assets/ijn_yamato2.jpg';
import detail2 from './assets/ijn_yamato3.jpg';
import detail3 from './assets/ijn_yamato4.jpg';
import Fourth from './component/Fourth';

function Warship() {
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
          <Second title = "IJN Yamato" content = "Yamato (大和) was the lead ship of her class of battleships built for the Imperial Japanese Navy (IJN) shortly before World War II. She and her sister ship, Musashi, were the heaviest and most powerfully armed battleships ever constructed, displacing nearly 72,000 tonnes (71,000 long tons) at full load and armed with nine 46 cm (18.1 in) Type 94 main guns, which were the largest guns ever mounted on a warship." /> <br />
          <Third map = {map} flag = {flag}/>
          <Fourth detail1= {detail1} detail2= {detail2} detail3= {detail3} />
        </div>
      </div><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>
  )
}

export default Warship

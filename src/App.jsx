import './App.css'
import './footer.css'
import Navlist from './component/Navlist';
import First from './component/first';
import NavLogo from './component/Navlogo';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from './component/footer';
import pic from './assets/draken1.jpg';
import Second from './component/Second';
import Third from './component/Third';
import map from './assets/Map.png';
import flag from './assets/flag.jpg';
import detail1 from './assets/draken2.jpg';
import detail2 from './assets/draken2f.jpg';
import detail3 from './assets/draken3.jpg';
import Fourth from './component/Fourth';

function App() {
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
          <Second title = "J-35 Draken" content = "The Saab 35 Draken is a Swedish fighter-interceptor developed and manufactured by Svenska Aeroplan Aktiebolaget (SAAB) between 1955 and 1974. Development of the Saab 35 Draken started in 1948 as the Swedish air force future replacement for the then also in development Saab 29 Tunnan dayfighter and Saab 32B Lansen night fighter. It featured an innovative but unproven double delta wing, which led to the creation of a sub-scale test aircraft, the Saab 210, which was produced and flown to test this previously-unexplored aerodynamic feature. The full-scale production version entered service with frontline squadrons of the Swedish Air Force on 8 March 1960. It was produced in several variants and types, most commonly as a fighter-interceptor." /> <br />
          <Third map = {map} flag = {flag}/>
          <Fourth detail1= {detail1} detail2= {detail2} detail3= {detail3} />
        </div>
      </div><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>
  )
}

export default App

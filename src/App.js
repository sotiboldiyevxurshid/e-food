
import Header from './componet/Header.jsx';
import Navbar from './componet/Navbar.jsx';
import Section from './componet/Section.jsx';
import Section1 from './componet/Section1.jsx';
import Section2 from './componet/Section2.jsx';
import './insex.css'
const person = require('../src/img/Scooter Guy.png')




function App() {
  return (
  <>
<Navbar/>
 
 <Header image={person}/>
  <Section/>
  <Section1/>
  <Section2/>
  </>
 
  )
}

export default App;

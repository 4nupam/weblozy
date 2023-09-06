import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import Carausal from './Component/Carausal/Carausal'
import CarausalBox from './Component/CarausalBox/CarausalBox';
import CD from './Component/CarausalDesc/CD';
import Tab from './Component/Tabs/Tab';

function App() {
  return (
   

    <div className="App">
      
     <Nav/>
     <hr />
    <Carausal/>
    <br />
    <hr />
    <br />
<Tab/>
    </div>
  );
}

export default App;

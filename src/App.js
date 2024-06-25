import './App.css';
import Navbar from './Components/Navbar';
import LightCrown from './Components/LightCrown';
import Options from './Components/Options';
import Logout from './Components/Logout';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="app">
      <Navbar />
      <LightCrown />
      <Banner />
      <Options />
      <Logout />
    </div>
  );
}

export default App;

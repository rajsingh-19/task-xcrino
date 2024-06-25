import './App.css';
import Navbar from './Components/Navbar';
import LightCrown from './Components/LightCrown';
import Options from './Components/Options';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LightCrown />
      <Options />
      <Logout />
    </div>
  );
}

export default App;

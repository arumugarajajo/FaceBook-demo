import logo from './logo.svg';
import './App.css';
import './Component/topbar/topbar.css'
import Topbar from './Component/topbar/Topbar';
import Home from './Pages/home/Home';
import Profile from './Component/profile/Profile';
import Login from './Pages/home/login/Login';
import Register from './Pages/register/Register';

function App() {
  return (
    <div >
      <Home/>
    </div>
  );
}

export default App;

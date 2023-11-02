
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Footer from './componenet/Footer';
import Hader from './componenet/Hader';
import Home from './pages/Home';
import CartDisplay from './componenet/CartDisplay';

function App() {
  return (
    <div className="App">
        <Hader/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CartDisplay/:id' element={<CartDisplay/>}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;

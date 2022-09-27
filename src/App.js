import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Students from './Components/Students';
import Contectus from './Components/Contactus';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Students' element={<Students/>}/>
         <Route path='/Contectus' element={<Contectus/>}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
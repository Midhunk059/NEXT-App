// import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Login from './pages/Login';
import './App.css';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Header from './components/Header';

function App() {
  // let arr=[{name:'Midhun',age:23},{name:'rahul',age:24},{name:'abc',age:32},{name:'raju',age:25}]
  return (
    <BrowserRouter>
        <div className="app">
         <Header/>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='teachers' element={<Teachers />} />
              <Route path='students' element={<Students />} />
          </Routes>
       </div>
    </BrowserRouter>
    
  );
}

export default App;

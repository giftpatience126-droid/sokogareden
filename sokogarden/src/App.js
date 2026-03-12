import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import{ BrowserRouter as Router ,Routes,Route,Link }from 'react-router-dom';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MpesaPayment from './components/MpesaPayment';

function App() {
  
  
  
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden-Buy and sell online</h1>
      </header>
      

      <nav>
        <Link to='/signup' className='btn btn-dark m-2 mt-3'>Sign Up</Link>
        
        <Link to='/signin'className='btn btn-dark m-2 mt-3'>Sign In</Link>
        <Link to='/getproducts' className='btn btn-dark m-2 mt-3'>Get Products</Link>
        <Link to='addproducts' className='btn btn-dark m-2 mt-3'>Add Products</Link>
      </nav>

      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/addproducts' element={<AddProducts/>} />
        <Route path='/getproducts' element={<GetProducts/>} />
        <Route path='/mpesapayment' element={<MpesaPayment/>} />
      </Routes>




    </div>
    </Router>
  );
 
}

export default App;

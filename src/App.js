import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Header from './components/Home/Header/Header';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Purchase from './components/Purchase/Purchase';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/addService" element={<AddService></AddService>} />
        <Route path="/footer" element={<Footer></Footer>} />
      </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

import Header from "./Components/header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePageProducto";
import Subheader from "./Components/subheader/Subheader";


function App() {


  return (
    <><ToastContainer /><Router>
      
      <Container style={{ minHeight: '100vh', minWidth: '100%', padding: '0' }}>
      <Header />
      <Subheader />
      <HomePage />
      </Container>
    </Router></>  
  )
}

export default App;
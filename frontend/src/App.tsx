import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from "./components/layout/layout";
import About from './components/AboutUs/about';
import FAQ from './components/FAQ/faq';
import Services from './components/Services/services';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/faq" element={<FAQ/>}/>
      </Routes>
    </>
  )
}

export default App

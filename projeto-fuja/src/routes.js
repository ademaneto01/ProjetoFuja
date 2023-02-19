import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

export default function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>        
        </>
    );
  }
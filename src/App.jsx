
import { Route, Routes } from 'react-router-dom'
import Services from './pages/service.jsx'
import Blog from './pages/blog.jsx'
import Contact from './pages/contact.jsx'
import Accueil from './pages/accueil.jsx'
//import Contenu from './wigth/body.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
//import i4 from "./assets/i4.png";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App

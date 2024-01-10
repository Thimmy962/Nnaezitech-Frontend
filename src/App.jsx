import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import About from './Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import NotFound from "./Pages/NotFound";
import Listing from "../src/Pages/Listing.jsx";
import Contact  from "./Pages/Contact";
import Detail from "./Pages/Detail";

function App() {


  return (
    <> 
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:status" element={<Listing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/listing/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import About from './Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import NotFound from "./Pages/NotFound";
import Listing from "./Pages/Listing";
import Contact  from "./Pages/Contact";


function App() {


  return (
    <> 
      <Header />
      <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="listing" element={<Listing />} />
          <Route path="listing/:status" element={<Listing />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

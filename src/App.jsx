import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Venues from './pages/Venues';
import ViewVenues from './pages/OpenVenue';
import Dashboard from './pages/Dashboard';
import OpenVenue from './pages/OpenVenue';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/sis.materdeicollege.com/api/venues/" element={<Venues />}></Route>
          <Route path="/sis.materdeicollege.com/api/venues/:id" element={<ViewVenues />} />
        </Routes>
        <Routes>
          <Route path="/Venues/" element={<Venues />}></Route>
        </Routes>

      </div>
    </div>

  )
}

export default App

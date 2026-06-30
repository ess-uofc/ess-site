import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, About, Council, Events, Contact } from "./components/pages";


function App() {
  return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/council" element={<Council />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  </div>
  )
}

export default App;
import "./App.css";
//import { Navbar } from "./components/Navbar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Council, Events, Contact, Departments, Sponsors, Store, Membership, Applications, Conferences, PublicDocuments, SELF } from "./components/pages";


function App() {
  return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/council" element={<Council />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/store" element={<Store />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/conferences" element={<Conferences />} />
      <Route path="/publicdocuments" element={<PublicDocuments />} />
      <Route path="/self" element={<SELF />} />


    </Routes>
  </div>
  )
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Events from './pages/Events';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Others from './pages/Others';
import Facilities from './pages/Facilities';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/others" element={<Others />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
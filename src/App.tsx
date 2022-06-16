import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import { NavigationMini } from './components/Header/navigation';
import { motion } from 'framer-motion';
import Help from './components/Help';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' ,overflow:'hidden' }}>
        <NavigationMini setOpen={() => setOpen(!open)} open={open} />
        <div>
          <motion.div
            onClick={() => setOpen(false)}
            animate={{
              opacity: open ? [0, 0.8] : 0,
              background: '#222',
              display: 'block',
              transitionEnd: {
                display: open ? '' : 'none',
              },
            }}
            style={{
              position: 'fixed',
              zIndex: 200,
              height: '100vh',
              width: '100vw',
              opacity: 0
            }}
          />
          <Help/>
          <div
            style={{
              position: open ? 'fixed' : 'inherit',
            }}
          >
            <Disclaimer />
            <Header />
            <Routes>
              <Route path='/' element={<LandingPage open={open} />}>
                {/* <Route path="expenses" element={<Expenses />} /> */}
                {/* <Route path="invoices" element={<Invoices />} /> */}
              </Route>
            </Routes>
            
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

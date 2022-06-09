import React from 'react';
import LandingPage from './components/LandingPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Landing';
import NavigationBar from './Navbar';
export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<LandingPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

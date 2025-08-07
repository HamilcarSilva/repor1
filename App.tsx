
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookingsProvider } from './context/BookingsContext';
import { Header } from './components/Header';
import { BookingPage } from './pages/BookingPage';
import { ReportPage } from './pages/ReportPage';

function App() {
  return (
    <BookingsProvider>
      <HashRouter>
        <div className="min-h-screen bg-slate-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<BookingPage />} />
              <Route path="/reports" element={<ReportPage />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </BookingsProvider>
  );
}

export default App;

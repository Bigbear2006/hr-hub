import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Vacancies from './pages/Vacancies.jsx';
import Candidates from './pages/Candidates.jsx';
import Events from './pages/Events.jsx';
import CalendarChange from './pages/CalendarChange.jsx';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/vacancies" element={<Vacancies />} />
				<Route path="/candidates" element={<Candidates />} />
				<Route path="/events" element={<Events />} />
				<Route path="/calendar" element={<CalendarChange />} />
      </Routes>
    </div>
  );
}

export default App;

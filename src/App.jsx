import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar';
import Drone from './pages/Drone';
import Orders from './pages/Orders';
import Robot from './pages/Robots';

// Import all CSS files
import './components.css';
import './pages.css';

const App = () => {
    // Basic authentication state simulation
    const [isAuthenticated, setIsAuthenticated] = React.useState(true); 
    
    return (
        <Router>
            <Routes>
                {/* Auth route */}
                <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />

                {/* Protected routes */}
                <Route path="*" element={
                    isAuthenticated ? (
                        <div className="app-container">
                            <Sidebar />
                            <div className="main-content">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    {/* Add more admin routes here (e.g., /settings, /drones) */}
                                    <Route path="/drones" element={<Drone />} />
                                    <Route path="orders" element={<Orders/>} />
                                    <Route path="robots" element={<Robot/>} />
                                </Routes>
                            </div>
                        </div>
                    ) : (
                        <Navigate to="/auth" replace />
                    )
                } />
            </Routes>
        </Router>
    );
};

export default App;
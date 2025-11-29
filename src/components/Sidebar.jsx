import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="sidebar">
            <h1>DRONE ADMIN</h1>
            <nav>
                <Link to="/" className={isActive('/')}>
                    Dashboard
                </Link>
                
                <Link to="/orders" className={isActive('/orders')}>
                    Orders
                </Link>
                
                <Link to="/drones" className={isActive('/drones')}>
                    Drones
                </Link>
                <Link to="/robots" className={isActive('/robots')}>
                    Robots
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
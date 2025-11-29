import RobotCard from '../components/RobotCard';

// Mock Data
const robots = [
    { id: 'R-001', status: 'Delivering', location: 'Warehouse A', battery: 85 },
    { id: 'R-002', status: 'Delivering', location: '456 Oak St', battery: 30 },
    { id: 'R-003', status: 'Online', location: 'Hangar B', battery: 95 },
    { id: 'R-004', status: 'Charging', location: 'Warehouse A', battery: 72 },
    { id: 'R-005', status: 'Delivering', location: '101 Pine Ln', battery: 55 },
    { id: 'R-006', status: 'Maintenance', location: 'Hangar B', battery: 60 },
    { id: 'R-007', status: 'Online', location: 'Warehouse A', battery: 90 },
    { id: 'R-008', status: 'Charging', location: 'Hangar B', battery: 40 },
    { id: 'R-009', status: 'Delivering', location: '789 Birch Ave', battery: 15 },
    { id: 'R-010', status: 'Online', location: 'Warehouse A', battery: 88 }
];

const Robot = () => {
    
    return (
        <div>
            <h2>Robot Dashboard Overview</h2>
            
            <h2 style={{marginTop: '3rem'}}>Drone Fleet Status</h2>
            <div className="drone-card-grid">
                {robots.map(robots => (
                    <RobotCard key={robots.id} robot={robots} />
                ))}
            </div>
        </div>
    );
};

export default Robot;
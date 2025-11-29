import DroneCard from '../components/DroneCard';

// Mock Data
const drones = [
    { id: 'D-001', status: 'Online', location: 'Warehouse A', battery: 85 },
    { id: 'D-002', status: 'Delivering', location: '456 Oak St', battery: 30 },
    { id: 'D-003', status: 'Charging', location: 'Hangar B', battery: 95 },
    { id: 'D-004', status: 'Online', location: 'Warehouse A', battery: 72 },
    { id: 'D-005', status: 'Delivering', location: '101 Pine Ln', battery: 55 },
    { id: 'D-006', status: 'Maintenance', location: 'Hangar B', battery: 60 },
    { id: 'D-007', status: 'Online', location: 'Warehouse A', battery: 90 },
    { id: 'D-008', status: 'Charging', location: '456 Oak St', battery: 40 },
    { id: 'D-009', status: 'Delivering', location: '126 Maple St', battery: 51 },
    { id: 'D-010', status: 'Online', location: 'Hangar B', battery: 88 }
];

const Drone = () => {
    return (
        <div>
            <h2>Drone Dashboard Overview</h2>
            
            <h2 style={{marginTop: '3rem'}}>Drone Fleet Status</h2>
            <div className="drone-card-grid">
                {drones.map(drone => (
                    <DroneCard key={drone.id} drone={drone} />
                ))}
            </div>
        </div>
    );
};

export default Drone;
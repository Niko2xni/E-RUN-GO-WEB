const RobotCard = ({ robot }) => {
    let statusClass = '';
    if (robot.status === 'Online') statusClass = 'online';
    else if (robot.status === 'Delivering') statusClass = 'delivery';
    else if (robot.status === 'Charging') statusClass = 'charging';

    // Battery progress value must be between 0 and 100
    const batteryValue = Math.max(0, Math.min(100, robot.battery));

    return (
        <div className="drone-card">
            <h4>Robot ID: {robot.id}</h4>
            <span className={`status ${statusClass}`}>{robot.status}</span>
            <p>Location: {robot.location}</p>
            <div>
                <p>Battery: {batteryValue}%</p>
                <progress value={batteryValue} max="100"></progress>
            </div>
        </div>
    );
};

export default RobotCard;
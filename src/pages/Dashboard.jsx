import StatCard from '../components/StatCard';
import TransactionHistory from '../components/TransactionHistory';

// Mock Data
const stats = [
    { title: 'Total Revenue', value: '$45,230', type: 'success' },
    { title: 'Total Orders', value: '1,245', type: 'primary' },
    { title: 'Orders Today', value: '42', type: 'success' },
    { title: 'Active Drones', value: '8/10', type: 'warning' },
    { title: 'Active Robots', value: '5/10', type: 'warning' },
    { title: 'Avg. Order Value', value: '$36.50', type: 'primary' },
];

const transactions = [
    { id: 'TRX-8891', orderId: 'ORD-1001', amount: 45.00, method: 'Credit Card', status: 'Completed', date: '2025-11-29 10:30 AM' },
    { id: 'TRX-8892',  orderId: 'ORD-1002', amount: 22.50, method: 'PayPal', status: 'Pending', date: '2025-11-29 11:15 AM' },
    { id: 'TRX-8893',  orderId: 'ORD-1004', amount: 120.00, method: 'Credit Card', status: 'Completed', date: '2025-11-28 09:45 PM' },
    { id: 'TRX-8894',  orderId: 'ORD-1005', amount: 15.00, method: 'Debit Card', status: 'Failed', date: '2025-11-28 08:20 AM' },
];

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard Overview</h2>

            <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div style={{marginTop: '3rem'}}>
                <TransactionHistory transactions={transactions} />
            </div>

        </div>
    );
};

export default Dashboard;
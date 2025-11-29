import React from 'react';
import StatCard from '../components/StatCard';
import TransactionHistory from '../components/TransactionHistory';

// In a real app, you might import 'recentOrders' from a context or the Orders file.
// For this mock, we use the EXACT same data to ensure consistency.
const recentOrders = [
  { id: 'ORD-1001', status: 'Delivered', droneId: 'D-004', destination: '789 Elm Rd', date: '2025-11-29', amount: 68.50 },
  { id: 'ORD-1002', status: 'In Transit', droneId: 'D-002', destination: '456 Oak St', date: '2025-11-29', amount: 48.75 },
  { id: 'ORD-1003', status: 'Pending', droneId: 'N/A', destination: '123 Main St', date: '2025-11-29', amount: 45.00 },
  { id: 'ORD-1004', status: 'Delivered', droneId: 'D-001', destination: '222 Birch Ln', date: '2025-11-28', amount: 72.90 },
  { id: 'ORD-1005', status: 'Cancelled', droneId: 'N/A', destination: '901 Pine Ave', date: '2025-11-28', amount: 55.75 },
  { id: 'ORD-1006', status: 'In Transit', droneId: 'D-003', destination: '333 Maple Dr', date: '2025-11-29', amount: 65.10 },
  { id: 'ORD-1007', status: 'Pending', droneId: 'N/A', destination: '505 Cedar Ct', date: '2025-11-30', amount: 44.50 },
  { id: 'ORD-1008', status: 'Delivered', droneId: 'D-005', destination: '678 Willow Way', date: '2025-11-29', amount: 70.00 },
  { id: 'ORD-1009', status: 'In Transit', droneId: 'D-004', destination: '101 Summit Blv', date: '2025-11-30', amount: 46.20 },
  { id: 'ORD-1010', status: 'Delivered', droneId: 'D-002', destination: '404 Error Rd', date: '2025-11-28', amount: 65.99 }
];

// --- 1. Filter & Map Transactions ---
// Logic: Only generate transactions for orders that are NOT Cancelled or Pending (assuming payment happens on completion/transit)
// or we can show Pending as 'Pending Payment'. Let's show all except Cancelled.
const transactions = recentOrders
    .filter(order => order.status !== 'Cancelled')
    //.slice(0, 10) // Display top 5 recent transactions
    .map((order, index) => {
        // Map Order Status to Payment Status
        let payStatus = 'Pending';
        if (order.status === 'Delivered') payStatus = 'Completed';
        else if (order.status === 'In Transit') payStatus = 'Pending';
        else if (order.status === 'Pending') payStatus = 'Pending';

        return {
            id: `TRX-${order.id.split('-')[1]}`, // Creates TRX-1001 from ORD-1001
            orderId: order.id,
            amount: order.amount,
            method: index % 2 === 0 ? 'Credit Card' : 'PayPal', // Mock method
            status: payStatus,
            date: order.date,
        };
    });

// --- 2. Calculate Statistics ---
const totalRevenue = recentOrders
    .filter(o => o.status === 'Delivered')
    .reduce((acc, curr) => acc + curr.amount, 0);

const totalOrders = recentOrders.length;
const activeDrones = 8; // Hardcoded mock to match Drone.jsx status
const activeRobots = 5; // Hardcoded mock to match Robot.jsx status

// Calculate Average Order Value
const avgOrderValue = totalRevenue / recentOrders.filter(o => o.status === 'Delivered').length || 0;

const stats = [
    { title: 'Total Revenue', value: `₱${totalRevenue.toFixed(2)}`, type: 'success' },
    { title: 'Total Orders', value: totalOrders, type: 'primary' },
    { title: 'Orders Today', value: recentOrders.filter(o => o.date === '2025-11-29').length, type: 'success' },
    { title: 'Active Drones', value: `${activeDrones}/10`, type: 'warning' },
    { title: 'Active Robots', value: `${activeRobots}/10`, type: 'warning' },
    { title: 'Avg. Order Value', value: `₱${avgOrderValue.toFixed(2)}`, type: 'primary' },
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
                {/* Only TransactionHistory is displayed here, as requested */}
                <TransactionHistory transactions={transactions} />
            </div>

        </div>
    );
};

export default Dashboard;
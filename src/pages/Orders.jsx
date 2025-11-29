
import OrderHistory from '../components/OrderHistory';;

// Mock Data
const recentOrders = [
  { id: 'ORD-1001', status: 'Delivered', droneId: 'D-004', destination: '789 Elm Rd', date: '2025-11-29', amount: 68.50, method: 'Drone' },
  { id: 'ORD-1002', status: 'In Transit', droneId: 'D-002', destination: '456 Oak St', date: '2025-11-29', amount: 48.75, method: 'Robot' },
  { id: 'ORD-1003', status: 'Pending', droneId: 'N/A', destination: '123 Main St', date: '2025-11-29', amount: 45.00, method: 'Robot' },
  { id: 'ORD-1004', status: 'Delivered', droneId: 'D-001', destination: '222 Birch Ln', date: '2025-11-28', amount: 72.90, method: 'Drone' },
  { id: 'ORD-1005', status: 'Cancelled', droneId: 'N/A', destination: '901 Pine Ave', date: '2025-11-28', amount: 55.75, method: 'Drone' },
  { id: 'ORD-1006', status: 'In Transit', droneId: 'D-003', destination: '333 Maple Dr', date: '2025-11-29', amount: 65.10, method: 'Drone' },
  { id: 'ORD-1007', status: 'Pending', droneId: 'N/A', destination: '505 Cedar Ct', date: '2025-11-30', amount: 44.50, method: 'Robot' },
  { id: 'ORD-1008', status: 'Delivered', droneId: 'D-005', destination: '678 Willow Way', date: '2025-11-29', amount: 70.00, method: 'Drone' },
  { id: 'ORD-1009', status: 'In Transit', droneId: 'D-004', destination: '101 Summit Blv', date: '2025-11-30', amount: 46.20, method: 'Robot' },
  { id: 'ORD-1010', status: 'Delivered', droneId: 'D-002', destination: '404 Error Rd', date: '2025-11-28', amount: 65.99, method: 'Drone' }
];
const Orders = () => {
    return (
        <div>
            <h2>Orders Overview</h2>
            
            <div style={{marginTop: '3rem'}}>
                <OrderHistory orders={recentOrders} /> 
            </div>
        </div>
    );
};

export default Orders;

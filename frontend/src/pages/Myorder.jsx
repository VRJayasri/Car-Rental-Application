import React, { useState, useEffect } from 'react';

function Myorder() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/orders'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                setOrders(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='orderpage'>
            <div>
        <ul className="orderlist">
          <li><a href="Home">Home</a></li>
          <li><a href="product">Cars</a></li>
          <li><a href="Myprofile">My Profile</a></li>
          <li><a href="orderdetails">My Order</a></li>
        </ul>
      </div>
            <h2 >My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className='ordertable' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Car Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order.carname}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Myorder;
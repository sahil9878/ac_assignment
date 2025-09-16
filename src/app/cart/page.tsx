'use client';

import { useCart } from '../../context/CartContext';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 && <p>Cart is empty</p>}
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ marginBottom: '1rem' }}>
                        <span>{item.title}</span> - ${item.price} × {item.qty}
                        <button style={{ marginLeft: '1rem' }} onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total Items: {totalCount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}

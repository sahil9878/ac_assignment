'use client';

import AddToCartButton from '@/components/AddToCartButton';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
    const { cart } = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 && <p>Cart is empty</p>}
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ marginBottom: '1rem' }}>
                        <div className='flex items-center gap-10'>
                            <span>{item.title}</span>  ${item.price} × {item.quantity}
                            <span>


                                <AddToCartButton product={item} />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total Items: {totalCount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}

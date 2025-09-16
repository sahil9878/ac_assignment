'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import CartIcon from '@/icons/cart.svg'

export default function Header() {
    const { cart } = useCart();
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ddd' }}>
            <Link href="/"><h2>Dummy E-Commerce</h2></Link>
            <nav>
                <Link href="/cart" className='cart-icon'>
                    <Image src={CartIcon} height={24} alt='Cart Icon' />({totalCount})
                </Link>
            </nav>
        </header>
    );
}

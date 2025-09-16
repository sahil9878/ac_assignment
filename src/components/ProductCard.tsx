'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
    const { addToCart } = useCart();

    return (
        <Link href={`/products/${product.id}`}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>

                <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>⭐ {product.rating}</p>
                <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); addToCart(product) }}>Add to Cart</button>
            </div>
        </Link>
    );
}

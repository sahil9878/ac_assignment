
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export interface IProduct {
    id: number
    thumbnail: string
    title: string
    price: number
    rating?: number
}

export default function ProductCard({ product }: { product: IProduct }) {

    return (
        <Link href={`/products/${product.id}`}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
                <div className='relative w-full h-60 '>
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>⭐ {product.rating}</p>
                <AddToCartButton product={product} />
            </div>
        </Link >
    );
}

import Image from "next/image";


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    images: string[];
}

async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const product = await getProduct(id);

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <Image src={product.images[0]} alt={product.title} width={400} height={400} />
            <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                <p><strong>Rating:</strong> {product.rating}</p>
            </div>
        </div>
    );
}

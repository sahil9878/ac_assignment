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
    const product = await getProduct(params.id);

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <img src={product.images[0]} alt={product.title} style={{ maxWidth: '300px' }} />
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

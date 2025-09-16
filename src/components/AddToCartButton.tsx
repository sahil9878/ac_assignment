"use client";

import { useCart } from "@/context/CartContext";
import { IProduct } from "./ProductCard";

interface AddToCartButtonProps {
    product: IProduct;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { cart, addToCart, removeFromCart } = useCart();

    const cartItem = cart.find((item) => item.id === product.id);
    console.log("Cart", cart)

    const removeButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        removeFromCart(product.id)
    }
    const addButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        addToCart(product)
    }

    return (
        <div>
            {!cartItem ? (
                <button
                    onClick={addButtonHandler}
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                >
                    Add to Cart
                </button>
            ) : (
                <div className="flex py-1 items-center gap-2">
                    <button
                        onClick={removeButtonHandler}
                        className="px-3 mt-0 bg-gray-300 rounded"
                    >
                        −
                    </button>
                    <span className="font-semibold">{cartItem.quantity}</span>
                    <button
                        onClick={addButtonHandler}
                        className="px-3 mt-0 bg-gray-300 rounded"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}

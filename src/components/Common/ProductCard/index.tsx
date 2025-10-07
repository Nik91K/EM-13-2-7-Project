import React from "react";
import type { Product } from "../../../types/ProductCard";
import { FaStar } from "react-icons/fa";

const ProductCard:React.FC<Product> = ({ stock, image, stars, reviews, name, price }) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} className="text-yellow-300" />
        ))
    }

    return (
        <div>
            <div>
                <p className="text-sm">
                    {stock ? "In Stock" : "Out of Stock"}
                </p>
            </div>
            <div className="my-2">
                <img 
                    src={image} 
                    alt="Product image"
                    className="w-full rounded-md" 
                />
            </div>
            <div className="flex gap-1">
                <div>
                    {renderStars(stars)}
                </div>
                <div>
                    <p>{reviews.toFixed(1)}</p>
                </div>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard

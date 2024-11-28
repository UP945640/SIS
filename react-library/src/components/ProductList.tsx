import React from "react";
import ProductModel from "../models/ProductModel";
import '../index.css';

interface ProductListProps {
    productList: ProductModel[];
    onEdit: (productId: number) => void;
    onDelete: (productId: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ productList, onEdit, onDelete }) => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Product List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>On Special</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => (
                        <tr
                            key={product.productId}
                            className={product.isSpecial ? "highlight" : ""}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.productDescription}</td>
                            <td>£{product.productPrice.toFixed(2)}</td>
                            <td>{product.categoryName}</td>
                            <td>{product.isSpecial ? "Yes" : "No"}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm me-2"
                                    onClick={() => onEdit(product.productId)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(product.productId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

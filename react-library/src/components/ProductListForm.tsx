import React, { useEffect, useState, useCallback } from "react";
import ProductModel from "../models/ProductModel";
import { ProductList } from "./ProductList";

const BASE_URL = "http://localhost:8080/api/products";
const CATEGORIES = ["all", "vegetables", "meat", "furniture"];
const DEFAULT_PRODUCT: ProductModel = {
    productId: 0,
    productName: "",
    productDescription: "",
    productPrice: 0,
    categoryName: "vegetables",
    isSpecial: false,
};

const ErrorMessage = ({ message }: { message: string }) => (
    <p style={{ color: "red" }}>{message}</p>
);

export const ProductListForm: React.FC = () => {
    const [productList, setProductList] = useState<ProductModel[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState<string | null>(null);
    const [newProduct, setNewProduct] = useState<ProductModel>(DEFAULT_PRODUCT);
    const [editProductId, setEditProductId] = useState<number | null>(null);
    const [searchCategory, setSearchCategory] = useState<string>("all");
    const [formError, setFormError] = useState<string | null>(null);

    const baseURL = "http://localhost:8080/api/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) throw new Error("Something went wrong!");
                const data: ProductModel[] = await response.json();
                setProductList(data);
                setFilteredProducts(data);
            } catch (error: any) {
                setHttpError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const validateForm = (): boolean => {
        if (!newProduct.productName.trim()) {
            setFormError("Product name is required.");
            return false;
        }
        if (newProduct.productPrice < 0) {
            setFormError("Price must be greater than or equal to 0.");
            return false;
        }
        setFormError(null);
        return true;
    };

    const handleCategoryFilter = useCallback((category: string) => {
        setSearchCategory(category);
        setFilteredProducts(
            category === "all"
                ? productList
                : productList.filter(p => p.categoryName === category)
        );
    }, [productList]);

    const handleAddProduct = async () => {
        if (!validateForm()) return;

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error("Failed to add product!");
            const addedProduct: ProductModel = await response.json();
            const updatedList = [...productList, addedProduct];
            setProductList(updatedList);
            setFilteredProducts(updatedList);
            setNewProduct(DEFAULT_PRODUCT);
        } catch (error: any) {
            setHttpError(error.message);
        }
    };

    const handleEditProduct = (productId: number) => {
        const product = productList.find(p => p.productId === productId);
        if (product) setNewProduct(product);
        setEditProductId(productId);
    };

    const handleSaveEdit = async () => {
        if (!validateForm() || editProductId === null) return;

        try {
            const response = await fetch(`${BASE_URL}/${editProductId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error("Failed to update product!");
            const updatedList = productList.map(p =>
                p.productId === editProductId ? newProduct : p
            );
            setProductList(updatedList);
            setFilteredProducts(updatedList);
            setEditProductId(null);
            setNewProduct(DEFAULT_PRODUCT);
        } catch (error: any) {
            setHttpError(error.message);
        }
    };

    const handleDeleteProduct = async (productId: number) => {
        try {
            const response = await fetch(`${BASE_URL}/${productId}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete product!");
            const updatedList = productList.filter(p => p.productId !== productId);
            setProductList(updatedList);
            setFilteredProducts(updatedList);
        } catch (error: any) {
            setHttpError(error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (httpError) return <p>{httpError}</p>;

    return (
        <div className="container">
            <div>
                <label htmlFor="categoryFilter">Filter by Category:</label>
                <select
                    id="categoryFilter"
                    value={searchCategory}
                    onChange={e => handleCategoryFilter(e.target.value)}
                >
                    {CATEGORIES.map(category => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h2>{editProductId ? "Edit Product" : "Add New Product"}</h2>
                {formError && <ErrorMessage message={formError} />}
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.productName}
                    onChange={e =>
                        setNewProduct({ ...newProduct, productName: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Product Description"
                    value={newProduct.productDescription}
                    onChange={e =>
                        setNewProduct({ ...newProduct, productDescription: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={newProduct.productPrice}
                    onChange={e =>
                        setNewProduct({ ...newProduct, productPrice: +e.target.value })
                    }
                />
                <select
                    value={newProduct.categoryName}
                    onChange={e =>
                        setNewProduct({ ...newProduct, categoryName: e.target.value })
                    }
                >
                    {CATEGORIES.slice(1).map(category => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
                <label>
                    <input
                        type="checkbox"
                        checked={newProduct.isSpecial}
                        onChange={e =>
                            setNewProduct({ ...newProduct, isSpecial: e.target.checked })
                        }
                    />
                    On Special
                </label>
                <button onClick={editProductId ? handleSaveEdit : handleAddProduct}>
                    {editProductId ? "Save" : "Add Product"}
                </button>
            </div>

            <ProductList
                productList={filteredProducts}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
            />
        </div>
    );
};
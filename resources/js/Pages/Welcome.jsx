import { Head } from "@inertiajs/inertia-react";

import { Pagination } from "../components/Pagination";
import { Products } from "../components/Products";
import { Header } from "../components/Header";
import { useFilters } from "../hook/useFilters";

import { useEffect, useContext } from 'react'
import { ProductContext } from "../context/products";

export default function Welcome({ productsPage, categories, products }) {
    const { filtersProducts, setCategories } = useFilters()
    const filteredProducts = filtersProducts(products)

    const { setProducts } = useContext(ProductContext)

    useEffect(() => {
        setCategories(categories)
        setProducts(products)
    }, [])

    return (
        <>
            <Header />

            <div className="mb-3">
                <Products products={filteredProducts} />

                <div className="d-flex justify-content-center">
                    <Pagination links={productsPage.links} />
                </div>
            </div>
        </>
    );
}

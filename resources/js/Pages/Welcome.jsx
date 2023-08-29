import { Head } from "@inertiajs/inertia-react";

import { Pagination } from "../components/Pagination";
import { Products } from "../components/Products";
import { Header } from "../components/Header";
import { useFilters } from "../hook/useFilters";

import { useEffect } from 'react'

export default function Welcome({ productsPage, categories }) {
    const { filtersProducts, setCategories } = useFilters()
    const filteredProducts = filtersProducts(productsPage.data)

    useEffect(() => setCategories(categories))

    return (
        <>
            <Header />

            <div className="mt-4 mb-3">
                <Products products={filteredProducts} />

                <div className="d-flex justify-content-center">
                    <Pagination links={productsPage.links} />
                </div>
            </div>
        </>
    );
}

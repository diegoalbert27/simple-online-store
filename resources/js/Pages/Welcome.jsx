import { Head } from "@inertiajs/inertia-react";

import { Navbar } from "../Layout/Navbar";
import { Pagination } from "../components/Pagination";
import { Footer } from "../Layout/Footer";
import { Products } from "../components/Products";

export default function Welcome({ productsPage }) {
    return (
        <>
            <div
                className="bg-secondary rounded"
                style={{ height: "50vh" }}
            ></div>

            <div className="mt-4 mb-3">
                <Products products={productsPage.data} />

                <div className="d-flex justify-content-center">
                    <Pagination links={productsPage.links} />
                </div>
            </div>
        </>
    );
}

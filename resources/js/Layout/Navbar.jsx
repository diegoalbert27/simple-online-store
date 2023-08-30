import { Link } from "@inertiajs/inertia-react";
import { useRef, useContext, useState } from 'react'
import { ProductContext } from "../context/products";

export function Navbar() {
    const inputSearch = useRef()

    const { products } = useContext(ProductContext)

    const [productsFinded, setProductsFinded] = useState([])

    const searchProduct = (event) => {
        event.preventDefault()

        const keywordsFindProducts = inputSearch.current.value

        if (keywordsFindProducts === '') {
            return setProductsFinded([])
        }

        const findProducts = (productTarget, keyword) => (
            productTarget.toLowerCase().includes(keyword)
        )

        const productsFinded = products.filter(product => (
            findProducts(product.name, keywordsFindProducts) ||
            findProducts(product.description, keywordsFindProducts) ||
            findProducts(product.category.name, keywordsFindProducts)
        ))

        setProductsFinded(productsFinded)
    }

    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg position-sticky top-0" style={{
            zIndex: '1000'
        }}>
            <div className="container">
                <Link className="navbar-brand" href="/">
                    Simple Online Store
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="d-flex" role="search" onSubmit={searchProduct}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        ref={inputSearch}
                        onChange={searchProduct}
                        onFocus={searchProduct}
                    />

                    {
                        productsFinded.length > 0 &&
                            <div className="position-absolute top-100 bg-white p-2 rounded" style={{
                                width: '16.5%'
                            }}>
                                {
                                    productsFinded.map(product => (
                                        <div className="d-flex gap-2 border-bottom mb-1 pb-1" key={product.id_product}>
                                            <img className="rounded" src={product.product_imagen[0].url_imagen} height={50} width={50} />
                                            <div className="d-flex flex-column">
                                                <Link className="text-capitalize" href={`/products/${product.id_product}`}>{product.name}</Link>
                                                <p className="mb-0">{product.description.slice(0, 13)}...</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </form>

                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/cart">
                                Carrito
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signin">Ingresar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

import { Link } from "@inertiajs/inertia-react";
import { useContext, useState } from 'react'
import { ProductContext } from "../context/products";
import { useAuth } from "../hook/useAuth";

import { CiUser, CiPower, CiShoppingBasket } from "react-icons/ci";

export function Navbar() {
    const { products } = useContext(ProductContext)

    const { isAuth, user, logout, token } = useAuth()

    const [productsFinded, setProductsFinded] = useState([])
    const [showSearch, setShowSearch] = useState(false)

    const searchProduct = (event) => {
        setShowSearch(true)

        const keywordsFindProducts = event.target.value

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

    const showFindedProduct = productsFinded.length > 0 ? '' : 'd-none'

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

                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        onChange={searchProduct}
                        onFocus={searchProduct}
                    />

                    {
                        showSearch &&
                            <div className={`position-absolute top-100 bg-white p-2 rounded ${showFindedProduct}`}
                                style={{
                                    width: '16.5%'
                                }}
                            >
                                {
                                    productsFinded.map(product => (
                                        <div className="d-flex gap-2 border-bottom mb-1 pb-1" key={product.id_product}>
                                            <img className="rounded" src={product.product_imagen[0].url_imagen} height={50} width={50} />
                                            <div className="d-flex flex-column">
                                                <Link className="text-capitalize" href={`/products/${product.id_product}`} onClick={() => setShowSearch(false)}>{product.name}</Link>
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

                        {
                            isAuth() ?
                            <li className="nav-item my-auto">
                                <div className="dropstart">
                                    <button className="rounded-circle bg-black border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <CiUser className="fs-4 mx-0 m-1 text-white" />
                                    </button>
                                    <ul className="dropdown-menu me-2">
                                        <li>
                                            <div className="border-bottom mx-3 mt-1 mb-1 pb-1">
                                                <h2 className="fs-6 mb-0">{user.name}</h2>
                                                <div className="text-secondary" style={{
                                                    fontSize: '.8rem',
                                                }}>{user.email}</div>

                                                <Link className="btn fw-semibold p-0 d-flex gap-1 mt-1 align-items-center" headers={{ 'Authorization': `Bearer ${token}` }} style={{
                                                    fontSize: '.93rem'
                                                }} href="/orders">
                                                    <CiShoppingBasket className="fs-5" />
                                                    <span>Ordenes</span>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="btn fw-semibold mx-3 p-0 d-flex gap-1 mt-1 align-items-center" style={{
                                                fontSize: '.93rem'
                                            }}  type="button" onClick={async () => await logout()}>
                                                <CiPower className="fs-5" />
                                                <span>Cerrar Sesión</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li> :
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signin">Ingresar</button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

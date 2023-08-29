import { Link } from "@inertiajs/inertia-react";

export function Navbar() {
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
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Buscar
                    </button>
                </form>

                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/cart">
                                Carrito
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Iniciar sesión
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Registrarse
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

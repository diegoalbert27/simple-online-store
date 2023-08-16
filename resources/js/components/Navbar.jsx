export function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg position-sticky top-0">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Simple Online Store
                </a>

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
                            <a className="nav-link" href="#">
                                Carrito
                            </a>
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

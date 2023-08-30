import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

import { Link } from "@inertiajs/inertia-react";

export function Layout({ children }) {
    return (
        <div
            style={{
                position: "relative",
                minHeight: "100vh",
            }}
        >
            <Navbar />
            <div className="container mt-4 pb-5">{children}</div>
            <Footer />

            <div
                className="modal fade"
                id="signin"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-end">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <h2 className="modal-title fs-5 text-center">
                                Iniciar Sesión
                            </h2>

                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="col-form-label"
                                    >
                                        Correo Electronico:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="col-form-label"
                                    >
                                        Contraseña:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>

                                <div className="text-center mb-2">
                                    <button type="button" className="btn btn-primary">
                                        Ingresar
                                    </button>
                                </div>
                            </form>

                            <div className="text-center">
                                <p className="mb-0">¿No tienes una cuanta aún?</p>
                                <button className="btn btn-link" type="button" data-bs-dismiss="modal" onClick={() => {
                                    window.document.location = '/signup'
                                }}>Crear una ahora!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

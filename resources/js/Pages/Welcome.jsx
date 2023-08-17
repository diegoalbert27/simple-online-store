import { Head } from "@inertiajs/inertia-react";
import { Navbar } from "../components/Navbar";

export default function Welcome({ products }) {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <div
                    className="bg-secondary rounded"
                    style={{ height: "50vh" }}
                ></div>

                <div className="mt-4 mb-3">
                    {products.map((product, index) => {
                        if ((index + 1) % 4 === 0) {
                            return (
                                <div className="row mb-4">
                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div
                                                className="border rounded bg-secondary"
                                                style={{ height: "160px" }}
                                            ></div>

                                            <div className="mt-1">
                                                <span className="fs-5 fw-semibold">
                                                    {products[index].name}
                                                </span>
                                                <p className="mb-0">
                                                    {products[index].description}
                                                </p>
                                                <span className="fs-4 fw-bold">
                                                    ${products[index].price}
                                                </span>
                                            </div>

                                            <div className="mt-1 d-flex gap-1">
                                                <button className="btn btn-sm btn-primary">
                                                    Saber detalle
                                                </button>
                                                <button className="btn btn-sm btn-success">
                                                    Agregar al carro
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div
                                                className="border rounded bg-secondary"
                                                style={{ height: "160px" }}
                                            ></div>

                                            <div className="mt-1">
                                                <span className="fs-5 fw-semibold">
                                                    {products[index - 1].name}
                                                </span>
                                                <p className="mb-0">
                                                    {products[index - 1].description}
                                                </p>
                                                <span className="fs-4 fw-bold">
                                                    ${products[index - 1].price}
                                                </span>
                                            </div>

                                            <div className="mt-1 d-flex gap-1">
                                                <button className="btn btn-sm btn-primary">
                                                    Saber detalle
                                                </button>
                                                <button className="btn btn-sm btn-success">
                                                    Agregar al carro
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div
                                                className="border rounded bg-secondary"
                                                style={{ height: "160px" }}
                                            ></div>

                                            <div className="mt-1">
                                                <span className="fs-5 fw-semibold">
                                                    {products[index - 2].name}
                                                </span>
                                                <p className="mb-0">
                                                    {products[index - 2].description}
                                                </p>
                                                <span className="fs-4 fw-bold">
                                                    ${products[index - 2].price}
                                                </span>
                                            </div>

                                            <div className="mt-1 d-flex gap-1">
                                                <button className="btn btn-sm btn-primary">
                                                    Saber detalle
                                                </button>
                                                <button className="btn btn-sm btn-success">
                                                    Agregar al carro
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div
                                                className="border rounded bg-secondary"
                                                style={{ height: "160px" }}
                                            ></div>

                                            <div className="mt-1">
                                                <span className="fs-5 fw-semibold">
                                                    {products[index - 3].name}
                                                </span>
                                                <p className="mb-0">
                                                    {products[index - 3].description}
                                                </p>
                                                <span className="fs-4 fw-bold">
                                                    ${products[index - 3].price}
                                                </span>
                                            </div>

                                            <div className="mt-1 d-flex gap-1">
                                                <button className="btn btn-sm btn-primary">
                                                    Saber detalle
                                                </button>
                                                <button className="btn btn-sm btn-success">
                                                    Agregar al carro
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            <footer className="border-top p-3">
                <div className="container">
                    All rights reserved &copy; - 2023
                </div>
            </footer>
        </>
    );
}

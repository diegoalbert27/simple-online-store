import { Link } from "@inertiajs/inertia-react";

export function Product({ product }) {
    return (
        <div
            style={{
                width: "23.3%",
            }}
        >
            <div className="card border-0">
                <img
                    className="border rounded bg-secondary"
                    style={{ height: "160px" }}
                    src={product.product_imagen[0].url_imagen}
                ></img>

                <div className="mt-1">
                    <span className="fs-5 fw-semibold">{product.name}</span>
                    <p className="mb-0 text-truncate">{product.description}</p>
                    <span className="fs-4 fw-bold">${product.price}</span>
                    <p className="fw-semibold">Categoria: <span className="fw-normal">#{product.category.name}</span></p>
                </div>

                <div className="mt-1 d-flex gap-1">
                    <Link className="btn btn-sm btn-primary" href={`/products/${product.id_product}`}>
                        Saber detalle
                    </Link>
                    <button className="btn btn-sm btn-success">
                        Agregar al carro
                    </button>
                </div>
            </div>
        </div>
    );
}

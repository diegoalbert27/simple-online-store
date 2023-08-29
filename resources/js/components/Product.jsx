import { Link } from "@inertiajs/inertia-react";
import { useCart } from "../hook/useCart";

export function Product({ product }) {
    const { hasProduct, addProductCart, removeProductCart, findProduct, increaseAmount, decreaseAmount } = useCart()

    const addProduct = () => addProductCart(product)
    const removeProduct = () => removeProductCart(product)

    const productCart = hasProduct(product) ? findProduct(product) : null

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
                    <p className="fw-semibold">
                        <span className="fw-normal">
                            {product.category.name}
                        </span>
                    </p>

                    {
                        hasProduct(product) &&
                            <div className="d-flex gap-2 align-items-center my-2">
                                <p className="my-auto flex-fill">Cantidad: <span className="fw-bold">{productCart?.count}</span></p>
                                <button className="btn btn-sm btn-secondary px-3" onClick={() => decreaseAmount(product)}>-</button>
                                <button className="btn btn-sm btn-secondary px-3" onClick={() => increaseAmount(product)}>+</button>
                            </div>
                    }
                </div>

                <div className="mt-1 d-flex justify-content-between">
                    <Link
                        className="btn btn-primary"
                        href={`/products/${product.id_product}`}
                    >
                        Saber detalle
                    </Link>

                    {
                        hasProduct(product) ?
                            <button className="btn btn-danger" onClick={removeProduct}>
                                Sacar del carro
                            </button> :
                            <button className="btn btn-success" onClick={addProduct}>
                                Agregar al carro
                            </button>
                    }
                </div>
            </div>
        </div>
    );
}

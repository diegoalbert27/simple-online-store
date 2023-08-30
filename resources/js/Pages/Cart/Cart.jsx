import { Link } from "@inertiajs/inertia-react";
import { useCart } from "../../hook/useCart";

export default function Cart() {
    const { cart, addProductCart, decreaseAmount, removeProductCart } = useCart();

    const total = cart.products
        .map(product => product.count * product.price)
        .reduce((total, item) => total + item, 0)

    return (
        <div className="border p-5 rounded mb-4">
            <div className="mb-2">
                <Link href="/">Continuar Comprando</Link>
            </div>
            <div>
                <h2>Carrito de compras</h2>
                <p className="mb-1">
                    Tienes <span>{cart.products.length}</span> productos en tu carro
                </p>
                <p className="fs-4">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="mt-3">
                {cart.products.map((product) => (
                    <div className="row g-0 rounded border mb-3" key={product.id_product}>
                        <div className="col-6 flex-grow-1 d-flex gap-3">
                            <img
                                className="rounded"
                                src={product.product_imagen[0].url_imagen}
                                height={100}
                                width={100}
                            />
                            <div className="my-auto">
                                <h3 className="fs-4 text-capitalize mb-0">
                                    {product.name}
                                </h3>
                                <p className="text-secondary text-sm mb-0 text-truncate">
                                    {product.description}
                                </p>
                                <Link href={`/products/${product.id_product}`}>
                                    Detalles
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 d-flex gap-3 align-items-center justify-content-center w-25">
                            <button className="btn border px-3" onClick={() => decreaseAmount(product)}>-</button>
                            <input
                                className="form-control text-center w-25"
                                type="text"
                                value={product.count}
                                readOnly
                            />
                            <button className="btn border px-3" onClick={() => addProductCart(product)}>+</button>
                        </div>
                        <div className="col-3 flex-grow-1 my-auto text-center">
                            <span className="fw-bold fs-5 me-3 mb-0">${product.price}</span>
                            <button className="btn btn-danger" onClick={() => removeProductCart(product)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

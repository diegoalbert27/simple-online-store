import { useCart } from "../hook/useCart";

export function ProductCount({ product }) {
    const { cart, decreaseAmount, addProductCart } = useCart()

    const productCart = cart.products.find(item => item.id_product === product.id_product)
    const count = productCart !== undefined ? productCart.count : 1

    return (
        <div className="d-flex gap-2 align-items-center my-2 w-100">
            <p className="my-auto flex-fill">
                Cantidad: <span className="fw-bold">{count}</span>
            </p>
            <button
                className="btn btn-sm btn-secondary px-3"
                onClick={() => decreaseAmount(product)}
            >
                -
            </button>
            <button
                className="btn btn-sm btn-secondary px-3"
                onClick={() => addProductCart(product)}
            >
                +
            </button>
        </div>
    );
}

import { useCart } from "../hook/useCart";

export function ProductManage({ product }) {
    const { hasProduct, addProductCart, removeProductCart } = useCart()

    return (
        <>
            {hasProduct(product) ? (
                <button
                    className="btn btn-danger"
                    onClick={() => removeProductCart(product)}
                >
                    Sacar del carro
                </button>
            ) : (
                <button
                    className="btn btn-success"
                    onClick={() => addProductCart(product)}
                >
                    Agregar al carro
                </button>
            )}
        </>
    );
}

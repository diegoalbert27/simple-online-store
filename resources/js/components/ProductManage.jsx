import { useCart } from "../hook/useCart";

export function ProductManage({ product }) {
    const { hasProduct, addProductCart, removeProductCart } = useCart();

    const isProductInToCart = hasProduct(product);
    const typeButton = isProductInToCart ? 'danger' : 'success'

    return (
        <button
            className={`btn btn-${typeButton}`}
            onClick={
                isProductInToCart ?
                () => removeProductCart(product) :
                () => addProductCart(product)
            }
        >
            {
                isProductInToCart ?
                    'Sacar del carro' :
                    'Agregar al carro'
            }
        </button>
    );
}

import { useCart } from "../hook/useCart";

import toast, { Toaster } from 'react-hot-toast';

export function ProductManage({ product }) {
    const { hasProduct, addProductCart, removeProductCart } = useCart();

    const isProductInToCart = hasProduct(product);
    const typeButton = isProductInToCart ? 'danger' : 'success'

    return (
        <>
            <button
                className={`btn btn-${typeButton}`}
                onClick={
                    isProductInToCart ?
                    () => removeProductCart(product) :
                    () => {
                        addProductCart(product)
                        toast.success('Producto agregado al carro');
                    }
                }
            >
                {
                    isProductInToCart ?
                        'Sacar del carro' :
                        'Agregar al carro'
                }
            </button>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    );
}

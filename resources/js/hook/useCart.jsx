import { useContext } from 'react'
import { CartContext } from '../context/cart';

export function useCart() {
    const { cart, addProductCart, removeProductCart, decreaseAmount, cleanCart } = useContext(CartContext)

    const getTotalPriceCart = (products) => {
        let totalPriceCart = 0
        products.forEach(product => {
            const PRICE = product.price_product === undefined ? 'price' : 'price_product'
            return totalPriceCart += (product[PRICE]) * product.count
        })

        return totalPriceCart.toFixed(2)
    }

    const hasProduct = (product) => (
        cart.products.some(item => item.id_product === product.id_product)
    )

    return {
        addProductCart,
        removeProductCart,
        cleanCart,
        hasProduct,
        decreaseAmount,
        cart,
        getTotalPriceCart
    }
}

import { useContext } from 'react'
import { CartContext } from '../context/cart';

export function useCart() {
    const { cart, setCart } = useContext(CartContext)

    const addProductCart = (product) => (
        setCart((prevState) => ({
            ...prevState,
            products: [...prevState.products, {...product, count: 1}]
        }))
    )

    const removeProductCart = (product) => {
        setCart((prevState) => ({
            ...prevState,
            products: prevState.products.filter(productCart => productCart.id_product !== product.id_product)
        }))
    }

    const findProduct = (product) => (
        cart.products.find(cartProduct => cartProduct.id_product === product.id_product)
    )

    const findIndexProduct = (product) => (
        cart.products.findIndex(item => item.id_product === product.id_product)
    )

    const hasProduct = (product) => (
        findProduct(product) !== undefined
    )

    const increaseAmount = (product) => {
        const productInCartIndex = findIndexProduct(product)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.products[productInCartIndex].count += 1
            setCart(newCart)
        }
    }

    const decreaseAmount = (product) => {
        const productInCartIndex = findIndexProduct(product)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.products[productInCartIndex].count -= newCart.products[productInCartIndex].count > 1 ? 1 : 0
            setCart(newCart)
        }
    }

    return {
        addProductCart,
        removeProductCart,
        hasProduct,
        findProduct,
        increaseAmount,
        decreaseAmount,
        cart
    }
}

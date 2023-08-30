import { useContext } from 'react'
import { CartContext } from '../context/cart';

export function useCart() {
    const { cart, setCart } = useContext(CartContext)

    const addProductCart = (product) => {
        const productInCartIndex = findIndexProduct(product)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.products[productInCartIndex].count += 1
            setCart(newCart)
            return newCart
        }

        setCart((prevState) => ({
            ...prevState,
            products: [...prevState.products, {...product, count: 1}]
        }))
    }

    const removeProductCart = (product) => {
        setCart((prevState) => ({
            ...prevState,
            products: prevState.products.filter(productCart => productCart.id_product !== product.id_product)
        }))
    }

    const findIndexProduct = (product) => (
        cart.products.findIndex(item => item.id_product === product.id_product)
    )

    const hasProduct = (product) => (
        cart.products.some(item => item.id_product === product.id_product)
    )

    const decreaseAmount = (product) => {
        const productInCartIndex = findIndexProduct(product)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.products[productInCartIndex].count -= newCart.products[productInCartIndex].count > 1 ? 1 : 0
            setCart(newCart)
        }
    }

    const cleanCart = () => setCart(prevState => ({
        ...prevState,
        products: []
    }))

    return {
        addProductCart,
        removeProductCart,
        cleanCart,
        hasProduct,
        decreaseAmount,
        cart
    }
}

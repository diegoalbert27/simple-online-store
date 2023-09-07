import { useContext, useEffect } from 'react'

import { CartContext } from '../context/cart';
import { AuthContext } from '../context/auth';

import Storage from '../services/storage'

export function useCart() {
    const { cart, setCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const newCart = Storage.get('cart')

        if (newCart !== null) {
            setCart(newCart)
        }
    })

    const addProductCart = (product) => {
        const productInCartIndex = findIndexProduct(product)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.products[productInCartIndex].count += 1

            setCart(newCart)
            Storage.set('cart', newCart)

            return newCart
        }

        const newCart = {
            ...cart,
            user,
            products: [...cart.products, {...product, count: 1}]
        }

        setCart(newCart)
        Storage.set('cart', newCart)
    }

    const removeProductCart = (product) => {
        setCart((prevState) => {
            const newCart = {
                ...prevState,
                user,
                products: prevState.products.filter(productCart => productCart.id_product !== product.id_product)
            }

            Storage.set('cart', newCart)

            return newCart
        })
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
            Storage.set('cart', newCart)
        }
    }

    const cleanCart = () => {
        setCart(prevState => {
            const newCart = {
                ...prevState,
                user,
                products: []
            }

            Storage.set('cart', newCart)

            return newCart
        })
    }

    return {
        addProductCart,
        removeProductCart,
        cleanCart,
        hasProduct,
        decreaseAmount,
        cart
    }
}

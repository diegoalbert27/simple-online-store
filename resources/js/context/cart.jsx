import { createContext, useState, useEffect } from 'react'
import Storage from '../services/storage'

export const CartContext = createContext()

const STATUS_CART = [
    'ESPERA', 'FINALIZADO', 'ABANDONADO'
]

export function CartProvider({ children }) {
    const [cart, setCart] = useState({
        status: STATUS_CART[0],
        products: [],
        user: null
    })

    return (
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

import { createContext, useState } from 'react'

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

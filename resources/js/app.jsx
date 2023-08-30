import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { Layout } from './Layout/Layout'

import * as bootstrap from 'bootstrap'
import { FiltersProvider } from './context/filters'
import { CartProvider } from "./context/cart";
import { ProductProvider } from './context/products'

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        const page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => (
            <ProductProvider>
                <Layout children={page} />
            </ProductProvider>
        ))
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <FiltersProvider>
                <CartProvider>
                    <App {...props} />
                </CartProvider>
            </FiltersProvider>
        )
    }
})

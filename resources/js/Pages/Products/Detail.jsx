import { useState } from 'react'
import { useCart } from "../../hook/useCart";

import { Products } from '../../components/Products'

export default function Details({ product, productsSimilars }) {
    const { hasProduct, addProductCart, removeProductCart } = useCart()

    const [imagenPreview, setImagenPreview] = useState(product.product_imagen[0].url_imagen)

    const viewImagenPreview = (imagen) => setImagenPreview(imagen.url_imagen)
    const imagenPreviewActive = (imagen) => imagen.url_imagen === imagenPreview ? 'border border-4 border-primary' : ''

    return (
        <>
            <div className="row mb-3">
                <div className="col-6">
                    <img className="rounded" src={imagenPreview} height={400} />

                    <div className="mt-2 d-flex gap-2">
                        {
                            product.product_imagen.map(imagen => {
                                return (
                                    <img className={`${imagenPreviewActive(imagen)} rounded`} style={{
                                        cursor: 'pointer'
                                    }} key={imagen.id_product_imagen} onClick={() => viewImagenPreview(imagen)} src={imagen.url_imagen} height={70} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="col-6 border rounded d-flex align-items-start flex-column mb-3 p-3">
                    <div className="mb-auto">
                        <h1 className="text-uppercase">{product.name}</h1>
                        <p className="mb-0">{product.description}</p>
                        <h2 className="fw-light">${product.price}</h2>
                        <p>{product.category.name}</p>
                    </div>

                    <div className="d-grid gap-2 py-2 w-100">
                        {
                            hasProduct(product) ?
                                <button className="btn btn-danger" onClick={() => removeProductCart(product)}>
                                    Sacar del carro
                                </button> :
                                <button className="btn btn-primary" onClick={() => addProductCart(product)}>
                                    Agregar al carrito
                                </button>
                        }
                    </div>
                </div>
            </div>

            {
                productsSimilars.length > 0 && (
                    <div className='my-5'>
                        <h2 className='fw-light mb-3'>Productos Similares</h2>
                        <Products products={productsSimilars} />
                    </div>
                )
            }
        </>
    )
}
import { CiCircleChevRight } from "react-icons/ci";

export default function Order({ carts }) {
    const getTotalPriceCart = (cartProducts) => {
        let totalPriceCart = 0
        cartProducts.forEach(cartProduct => totalPriceCart += cartProduct.price_product)

        return totalPriceCart.toFixed(2)
    }

    const getStatusColor = (status) => {
        const STATUS_COLOR = {
            'ESPERA': 'text-primary',
            'FINALIZADO': 'text-success',
            'ABANDONADO': 'text-danger'
        }

        return STATUS_COLOR[status]
    }

    return (
        <div className="border rounded p-5">
            <h1 className="fw-normal mb-0">Lista de compras</h1>
            <p className="mb-4 fw-semibold text-secondary">Total de {carts.length} compras</p>

            {
                carts.map((cart) => (
                    <div className="d-flex rounded gap-4 shadow mb-3">
                        <div className="position-relative" style={{
                            width: '9.9em'
                        }}>
                            <img className="position-absolute rounded" src={cart.cart_product[0].product.product_imagen[0].url_imagen} width='100%' />
                        </div>
                        <div className="flex-fill">
                            <h2 className="fw-bold mb-0">000{cart.id_cart}</h2>
                            <p className={`mb-0 fw-semibold ${getStatusColor(cart.status)}`} style={{
                                fontSize: '.8rem'
                            }}>{cart.status}</p>

                            <div className="mt-2 mb-2">
                                <p className="mb-0 text-secondary fw-light" style={{
                                    fontSize: '.9rem'
                                }}>{cart.created_at}</p>
                                <span className="">Total: ${getTotalPriceCart(cart.cart_product)}</span>
                            </div>
                        </div>
                        <div className="m-auto pe-5">
                            <button className="btn" type="button">
                                <CiCircleChevRight className="fs-2" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

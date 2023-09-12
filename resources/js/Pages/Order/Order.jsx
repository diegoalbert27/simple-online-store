import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "@inertiajs/inertia-react";
import { useAuth } from "../../hook/useAuth";
import { useCart } from "../../hook/useCart";

export default function Order({ carts }) {
    const { token } = useAuth()
    const { getTotalPriceCart } = useCart()

    const getStatusColor = (status) => {
        const STATUS_COLOR = {
            'ESPERA': 'text-primary',
            'FINALIZADO': 'text-success',
            'ABANDONADO': 'text-danger'
        }

        return STATUS_COLOR[status]
    }

    const getFormatDate = (formatDate) => {
        const date = new Date(formatDate)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDay()

        const addZeroDate = (date) => (
            date <= 10 ? `0${date}` : date
        )

        return `${addZeroDate(day)}-${addZeroDate(month)}-${year}`
    }

    return (
        <div className="border rounded p-5 mb-4">
            <h1 className="fw-normal mb-0">Lista de compras</h1>
            <p className="mb-4 fw-semibold text-secondary">Total de {carts.length} compras</p>

            {
                carts.map((cart, index) => (
                    <div className="d-flex rounded gap-4 shadow mb-3" key={index}>
                        <div className="position-relative" style={{
                            width: '9.9em'
                        }}>
                            {
                                cart.cart_product.map((cartProduct, index) => {
                                    if (index <= 2) {
                                        return (
                                            <img className="position-absolute rounded shadow" key={index} src={cartProduct.product.product_imagen[0].url_imagen} width={`${100 - (index * 5)}%`} />
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="flex-fill">
                            <h2 className="fw-bold mb-0">#000{cart.id_cart}</h2>
                            <p className={`mb-0 fw-semibold ${getStatusColor(cart.status)}`} style={{
                                fontSize: '.8rem'
                            }}>{cart.status}</p>

                            <div className="mt-2 mb-2">
                                <p className="mb-0 text-secondary fw-light" style={{
                                    fontSize: '.9rem'
                                }}>{getFormatDate(cart.created_at)}</p>
                                <span className="">Total: ${getTotalPriceCart(cart.cart_product)}</span>
                            </div>
                        </div>
                        <div className="m-auto pe-5">
                            <Link className="btn" href={`/orders/${cart.id_cart}`} headers={{ 'Authorization': `Bearer ${token}` }} >
                                <CiCircleChevRight className="fs-2" />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

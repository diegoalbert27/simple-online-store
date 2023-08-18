import { Product } from "./Product";

export function Products({ products }) {
    return (
        <div className="d-flex flex-wrap gap-4">
            {products.map((product) => {
                return <Product product={product} key={product.id_product} />;
            })}
        </div>
    );
}

import { useState, useId } from 'react';
import { useFilters } from '../hook/useFilters';

export function Filters() {
    const { setFilters, filters, categories } = useFilters()

    const price = useId()
    const category = useId()

    const handlerPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: Number(e.target.value)
        }))
    }

    const handlerCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <div className="d-flex justify-content-between my-4">
            <div className='d-flex align-items-center gap-2'>
                <label htmlFor={price}>Precio a partir de</label>
                <input
                    id={price}
                    type="range"
                    min='0'
                    max='1000'
                    onChange={handlerPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div className='d-flex align-items-center gap-2 w-25'>
                <label htmlFor={category}>Categoria</label>
                <select
                    className="form-select"
                    id={category}
                    value={filters.category}
                    onChange={handlerCategory}
                >
                    <option value="all">todos</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

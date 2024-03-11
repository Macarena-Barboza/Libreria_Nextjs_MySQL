import React from 'react'
import Link from 'next/link'

export default function ProductCard({ product }) {
    return (
        <Link href={`${process.env.NEXT_PUBLIC_URL_HOME}/${product.id}`} className='product-item'>  
            <img src={product.imagen} alt={product.titulo} />
            <h2>{product.titulo}</h2>
            <h3>${product.precio}</h3>
            <p className='item-descr'>{product.descripcion}</p>
        </Link>
    )
}


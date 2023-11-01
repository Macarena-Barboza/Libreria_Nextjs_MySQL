import React from 'react';
import axios from 'axios';
import Link from 'next/link'

async function loadProducts() {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_URL_LOCAL);
        return data;
}

export default async function ProductsPage() {
const products = await loadProducts()
    return (
        <div>
            <h1>Lista de Productos</h1>
            
            <div className='product' >
                {products.map(product => (
                    <Link href={`/products/${product.id}`} className='product-item' key={product.id}>
                         <h2>{product.titulo}</h2>
                         <h3>${product.precio}</h3>
                         <p className='item-descr'>{product.descripcion}</p>
                     </Link>
                    ))}
            </div>
            
            <div style={{margin: "auto", width: "500px", textAlign:"center" }}>
               <Link href={'/new'}> <button>Agregar Producto</button></Link>
            </div>

        </div>
    )
}

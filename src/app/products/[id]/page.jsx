import axios from 'axios'
import React from 'react'
import Button from './Button';

async function loadProduct(productId) {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_URL_LOCAL}/${productId}`)
    return data;
}

export default async function DetailProduct({params}) {
    const product = await loadProduct(params.id);
  return (
    <div>
        <div className='product-detail'>
        <h2>Detalle de Producto:</h2>
                <img src={product.imagen} alt={product.titulo}/>
                <p>Titulo: {product.titulo}</p>
                <p>Precio: $ {product.precio}</p>
                <p>Descripción: {product.descripcion}</p>
                <p>Fecha de creación: {product.fecha}</p>
                <Button productId={product.id} />
            </div>
    </div>
  )
}

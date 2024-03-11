'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function ProductForm() {
  const [product, setProduct] = useState({
    titulo:'',
    descripcion:'',
    precio:'',
    imagen:''
  });
  
  const resetForm = useRef(null);
  const router =  useRouter();
  const params= useParams();

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  useEffect(() =>{
    if(params.id){
      axios.get(`${process.env.NEXT_PUBLIC_URL_LOCAL}/`+params.id)
      .then(res => {
        setProduct({
          titulo: res.data.titulo,
          descripcion: res.data.descripcion,
          precio: res.data.precio,
          precio: res.data.imagen,
        })
      })
    }
  },[]) 
 
  const handleSubmit = async (e)=>{
      e.preventDefault();
      if(!params.id){
        const result = await axios.post(process.env.NEXT_PUBLIC_URL_LOCAL, product);
        console.log(result)
      } else {
        const result = await axios.put(`${process.env.NEXT_PUBLIC_URL_LOCAL}/`+ params.id, product);
        console.log(result);
      }
      resetForm.current.reset();
      router.refresh();
      router.push(process.env.NEXT_PUBLIC_URL_HOME);
  }

  return (
    <div className='contForm'>
    {params.id ? <h1>Actualizar un Producto:</h1> : <h1>Crear un Producto:</h1>}
        <form onSubmit={handleSubmit} ref={resetForm} >
            <label htmlFor='imagen'>Imagen:</label>
            <input type='text' placeholder='URL de Imagen' onChange={handleChange} name='imagen' value={product.imagen} />

            <label htmlFor='titulo'>Producto:</label>
            <input type='text' placeholder='titulo' onChange={handleChange} name='titulo' value={product.titulo} />

            <label htmlFor='descripcion'>Descripción:</label>
            <textarea rows={6} placeholder='descripción' onChange={handleChange} className='tarea' name="descripcion" value={product.descripcion}></textarea>

            <label htmlFor='Precio'>Precio:</label>
            <input type='text' placeholder='1000' onChange={handleChange} name='precio' value={product.precio} />

            <button>{params.id ? "Actualizar" : "Agregar Producto"}</button>
        </form>
    </div>
  )
}




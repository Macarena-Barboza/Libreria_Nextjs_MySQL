'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Button({productId}) {
    const router = useRouter();
  return (
    <div className='product-btn'>
            <button onClick={async () => {
                const result = await axios.delete(`${process.env.NEXT_PUBLIC_URL_LOCAL}/${productId}`)
                    if (result.status === 204) {
                        router.push(process.env.NEXT_PUBLIC_URL_HOME)
                        router.refresh()
                    }
            }}>Eliminar</button>

            <button onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL_EDIT}/${productId}`) }}>Editar</button>
            
        </div>
  )
}

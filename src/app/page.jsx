import React from "react"
// import ProductsPage from "./products/page"
import Link from "next/link"

export default  function Home() {
  return (
    <main >
       {/* <ProductsPage/> */}
       <div style={{margin: "auto", width: "500px", textAlign:"center" }}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quis impedit vero ab ipsam similique officiis laborum ipsum quidem! Animi repellendus vero voluptate facilis consectetur debitis rerum vitae eaque enim!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius qui illo placeat laudantium aut adipisci possimus consectetur hic asperiores obcaecati voluptatibus saepe sunt nesciunt officiis, deleniti eaque repudiandae ad.
      
        </p>
               <Link href={'/products'}> <button>Ver Productos</button></Link>
            </div>
    </main>
  )
}

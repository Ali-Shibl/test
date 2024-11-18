import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Helmet} from 'react-helmet';


export default function ProductDetails() {
 let {id} =useParams()

const [product, setproduct] = useState({})
const [isloading, setisloading] = useState(true)


async function getProduct(productId) {
  
 let {data}=await axios.get(`https://dummyjson.com/products/${productId}`)
 setproduct(data)

 setisloading(false)

}


 useEffect(() => {
  getProduct(id)  
 }, [id])
 




  return (
<>

<Helmet>
        <meta charSet="utf-8" />
        <title>{product?.title}</title>
        <meta name="description" content="product details view" />
</Helmet>
{isloading? <div className="loader my-5"></div> 


:
<div className="row g-2 g-md-5 py-3">
  <div className="col-md-4">
  <Carousel  showStatus={false} autoPlay={true} infiniteLoop={true}>
  {product?.images?.map((img,index)=><div key={index}>

<img src={img}  className='w-100 img-product' alt={product?.title}/>

</div> )}
                
</Carousel>


  </div>
  <div className="col-md-8 mt-3 mt-md-0">
    <h1 className='h4 mb-4'>{product?.title}</h1>
    <h2 className='h6 text-muted my-2'><span className='text-main'>Price :</span>  {product?.price}</h2>
    
    <p className='my-2 text-muted'><span className='text-main'>category :</span>  {product?.category}</p>
    <p className='mt-2 text-muted mb-0'><span className='text-main'>description :</span>   {product?.description}</p>
  </div>
</div>
}

</>
  )
}

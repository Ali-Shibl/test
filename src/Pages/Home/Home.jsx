import axios from 'axios'
import React, { useState, useContext } from 'react'
import { productContext } from '../../Context/ProductContext'
import FormUpdata from '../../Components/FormUpdata/FormUpdata'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Home() {
  const [showFormUpdata, setShowFormUpdata] = useState(false)
  const [ProductUpdata, setProductUpdata] = useState({ title: '', price: '', description: '' })
  const [currentProductId, setCurrentProductId] = useState(null)

  let { products, setProducts, isloading } = useContext(productContext)


  // حذف منتج
  async function deleteProduct(id) {
    try {
      let { data } = await axios.delete(`https://dummyjson.com/products/${id}`)
      const newProducts = products.filter(product => product.id !== data.id)
      setProducts(newProducts)
      localStorage.setItem('products', JSON.stringify(newProducts))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  // فتح نموذج التعديل
  function handleEditProduct(product) {
    setShowFormUpdata(true)
    setCurrentProductId(product.id)  // حفظ ID المنتج الذي يتم تعديله
    setProductUpdata({
      title: product.title,
      price: product.price,
      description: product.description
    })
  }

  // إرسال التحديثات إلى الـ API
  async function updataProduct() {
    try {
      let { data } = await axios.put(`https://dummyjson.com/products/${currentProductId}`, {
        title: ProductUpdata.title,
        price: ProductUpdata.price,
        description: ProductUpdata.description
      })

      // تحديث المنتج في قائمة المنتجات
      const updatedProducts = products.map(product =>
        product.id === currentProductId ? { ...product, ...ProductUpdata } : product
      )

      setProducts(updatedProducts)
      localStorage.setItem('products', JSON.stringify(updatedProducts))

      // إغلاق نموذج التعديل بعد حفظ التحديث
      setShowFormUpdata(false)
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  // تحديث بيانات المنتج في النموذج
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductUpdata(prevState => ({
      ...prevState,
      [name]: value
    }))
  }



  return (

    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>home</title>
        <meta name="description" content="products view" />
      </Helmet>
      {isloading ? <div className="loader my-5"></div>

        :
        <div className="row g-0 row-gap-3 g-md-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-lg-3 col-sm-6 product">


              <Link className='nav-link' to={`/productdetails/${product.id}`}>
                <div className="card_box p-2">
                  <img src={product.images ? product.images[0] : ''} alt={product.title} className="w-100 img-product" />
                  <h1 className="h4">{product.title.split(' ').splice(0, 2).join(' ')}</h1>
                  <p>Price: {product.price}</p>
                  <p className='pragraph'>{product.description}</p>

                  <span></span>
                </div>

              </Link>
              <div className='my-3 d-flex gap-2'>
                <button
                  className="btn btn-dark w-50"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-dark w-50 "
                  onClick={() => handleEditProduct(product)}
                >
                  Update
                </button>
              </div>








              {/* عرض نموذج التعديل  للمنتج الذي يتم تعديله */}
              {showFormUpdata && currentProductId === product.id && (
                <FormUpdata ProductUpdata={ProductUpdata} updataProduct={updataProduct} setShowFormUpdata={setShowFormUpdata} handleInputChange={handleInputChange} />
              )}
            </div>
          ))}
        </div>
      }





    </>

  )
}

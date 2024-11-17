import React from 'react'
import {  createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import ProductContextProvider from './Context/ProductContext'
import ProductDetails from './Components/ProductDetails/ProductDetails'

export default function App() {

const routers=createHashRouter([
{path:'' ,element:<Layout/> ,children:[

  {index:true ,element:<Navigate to={'/home'}/>},
  {path:'/home',element:<Home/>},
  {path:'/productdetails/:id',element:<ProductDetails/>}



]}
])




  return <>
  
  
  
  <ProductContextProvider>
     <RouterProvider router={routers}/>
  </ProductContextProvider>
  
  
  
  </>  
}

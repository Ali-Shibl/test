import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";

export let productContext=createContext('')



function ProductContextProvider({children}) {

    const [products, setProducts] = useState([])
    const [isloading, setisloading] = useState(true)


    async function getAllProducts() {
        const storedProducts = localStorage.getItem('products')
    
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts))
          
        } else {
          try {
            let { data } = await axios.get('https://dummyjson.com/products')
            console.log(data.products)
            setProducts(data.products)
            localStorage.setItem('products', JSON.stringify(data.products))
          } catch (error) {
            console.error('Error fetching products:', error)
          }
        }
        setisloading(false)
      }

      useLayoutEffect(() => {
        getAllProducts()
      }, [])
    

    return <productContext.Provider value={{products,setProducts,isloading}}>


        {children}

    </productContext.Provider>
    
}

export default ProductContextProvider;
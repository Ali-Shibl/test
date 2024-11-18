import React from 'react'

export default function FormUpdata({ProductUpdata,updataProduct,setShowFormUpdata,handleInputChange}) {
  return (
    <div className="position-fixed update top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-black bg-opacity-50">
                <div className="p-3 form bg-white rounded-2">
                  <input 
                    type="text" 
                    name="title" 
                    value={ProductUpdata.title}
                    placeholder="Title" 
                    className='form-control mb-2'
                    onChange={handleInputChange}
                  />
                  <input 
                    type="number" 
                    name="price" 
                    value={ProductUpdata.price}
                    placeholder="Price" 
                    className='form-control mb-2'
                    onChange={handleInputChange}
                  />
                  <textarea 
                    name="description" 
                    placeholder="Description"
                    value={ProductUpdata.description}
                    className='form-control mb-2' 
                    onChange={handleInputChange}
                  />
                  <button className="btn btn-success" onClick={updataProduct}>Save</button>
                  <button className="btn btn-secondary ms-3" onClick={() => setShowFormUpdata(false)}>Cancel</button>
                </div>
              </div>
  )
}

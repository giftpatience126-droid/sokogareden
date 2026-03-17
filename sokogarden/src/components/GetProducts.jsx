import React, {useState,useEffect} from 'react'
import axios from 'axios'

const GetProducts = () => {

  // initialize your hooks
  // useEffect is a hook that allows you to retrieve stuff from your db
  // we dont have success because the success is you getting the products. instead were going to have a product hook

  // the [] is used because if there were no products we got an empty array so if there are no products, you will get tyhe empty array

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])



  // a variable to store our images
  const img_url="https://gift.alwaysdata.net/static/images/"


  // function to fetch or get our products from the API

  const fetchProducts=async()=>{
    setLoading("Please wait as we retrieve your products")

    try {
      // call your API

    const response=await axios.get("https://gift.alwaysdata.net/api/getproductdetails")

    setProducts(response.data)
    console.log('The response is', response);
    setLoading("")

    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
    
    

  }
  // end of the fetch function and also where we call our useEffect

  useEffect(()=>{
    fetchProducts()
  },[])
  // the dependency array, the [] between the } and the ) avoids re-rendering
  


   return (
    <div className='row'>
    <h1>Available Products</h1>

      <p className='text-warning'>{loading} </p>
      <p className='text-danger'>{error} </p>


{/* mapping through the products */}

{products.map((product)=>(
        
      
      
      <div className='col-md-4 justify-content-center'>
        <div className='card shadow mt-4'>


          <img src={img_url + product.product_photo} alt="skin care" className='product_img '/>
          <div className='card-body'>

            <h3 className='text-success'>{product.product_name} </h3>
            <p className='text-secondary'>{product.product_description}</p>
            <b className='text-warning'>{product.product_cost}</b>

            <br />
            <input type="button" value='Make Payments' className='btn btn-info' />


          </div>
        </div>



      </div>
))}

       
        </div>
 
  )
}

export default GetProducts
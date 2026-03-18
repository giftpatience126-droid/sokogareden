import React, { use, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const MpesaPayment = () => {

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const[phone,setPhone]=useState("")

  // receiving the parsed data from get products
  // uses {} because we are destructuring/ opening it
  // || to sh

  const{product}=useLocation().state || {}

  // function  to submit data to API
  const submit=async(e)=>{

    e.preventDefault()

    setLoading("Kindly wait as we complete the transaction")

    try {
      const data=new FormData()
      data.append("phone",phone)
      data.append("amount",product.product_cost)
      



      const response=await axios.post("https://gift.alwaysdata.net/api/mpesa_payment",data)

      

      
      setLoading("")
      setSuccess(response.data.message)


      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }






  return (
    <div className='row justify-content-center'>
        <h1>Make Payments-Lipa na Mpesa</h1>
        <p className='text-success'>{product.product_name} </p>
        <p className='text-warning'>{product.product_description}</p>
        <p className='text-secondary'>{product.product_cost}</p>
        

        <br /><br />

        <div className='col-md-6 card shadow'>

          <form action="" onSubmit={submit}>

            <p className='text-warning'>{loading} </p>
            <p className='text-success'>{success} </p>
            <p className='text-danger'>{error} </p>

            <br />
            <input type="tel" className='form-control' placeholder='Enter phone number starting with 254' value={phone} onChange={(e)=>setPhone(e.target.value)} />

            <br />
            <button className='btn btn-info w-100'>Make Payments</button>
            <br /><br />


          </form>


        </div>
        </div>
  )
}

export default MpesaPayment
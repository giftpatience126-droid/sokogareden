import React , { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

  // initialise the hooks
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  // initialise other hooks like loading, success and error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const navigate=useNavigate();

  const submit=async(e)=>{

    e.preventDefault()

    setLoading("Please wait...")

    try {
      
      const data=new FormData()
        data.append("email",email)
        data.append("password",password)
        
        // calling API 

        const response=await axios.post("https://gift.alwaysdata.net/api/signin",data)


        setLoading("")

        // check if the response has user item

        if(response.data.user){
          // if user is found, store details in local storage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setSuccess(response.data.message);




          // Redirect to /getproducts component

          setTimeout(()=>{

            navigate("/");
          },1000)  
        }
        else{
          // user not found, show error message
          setError(response.data.message);
        }





      
        // resetting your form
        setEmail("")
        setPassword("")
        
        

    } catch (error) {
      setLoading("")

      setError(error.data.message)
      
    }




  }

 
  return (
    <div className='row justify-content-center mt-3'>
      <div className=' card shadow col-md-6'>
        <h1>Sign In</h1>

        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


          <input type="email" placeholder='Enter your email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <br />

          <input type="password" placeholder='Enter your password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <br />

          <input type="submit" value='Sign In'  className='form-control bg-primary w-100 text-white'/>

          <br />

          <p>Don't have an account? &nbsp; <Link to='/signup'>Sign Up</Link></p>
        </form>

      </div>
      
        </div>
  )
}

export default SignIn
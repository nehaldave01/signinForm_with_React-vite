import React, { useState } from 'react'

const Signin = () => {
    const [data, setData] = useState({name:"", email:"", number:"", password:""})
    const [arr, setArr] = useState([]);
    const [err, setErr] = useState({})

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }



    const submit1 = () => {
      if (Notify()) {
        let getData = JSON.parse(localStorage.getItem("signup")) || [];
  
        let findData = getData.find((e) =>  e.email === data.email);
        if (!findData) {
          let copy1 = [...arr, data];
          console.log(copy1);
  
          localStorage.setItem("signup", JSON.stringify(copy1));
          toast.success("Success");
          setArr(copy1);
        }
        else{
          toast.error("email already exists")
        }
        setData({ email: "", password: "" });
      }
    };

    const validate = () => {
        let localErr = {};
        let status = true;
    
        if(data.name.length === 0){
           localErr.name = "name is required";
           status = false;
        }
        if(data.email.length === 0){
            localErr.email = "email is required";
            status = false;
        }
        if(data.number.length === 0){
            localErr.number = "number is required";
            status = false;
        }
        if(data.password.length === 0){
            localErr.password = "password is required";
            status = false;
        }
    
        setErr(localErr)
        return status;
      }

    
  return (
    <div className='container'>
       <div className='shadow w-25 mx-auto m-5 p-4'>
          <h1>Signup Form</h1>

          {/* <form action="" onSubmit={submitHandle}> */}
          <div className='p-2'>
            <label htmlFor="">Name:</label><br />
            <input type="text" className='form-control' name='name' value={data.name}  onChange={handleChange}/>
          </div>
         {err.name && <p style={{color:"red"}}>{err.name}</p>}

          <div className='p-2'>
            <label htmlFor="">Email:</label><br />
            <input type="text" className='form-control'name='email' value={data.email} onChange={handleChange}/>
          </div>
         {err.email && <p style={{color:"red"}}>{err.email}</p>}

          <div className='p-2'>
            <label htmlFor="">Phone Number:</label><br />
            <input type="text" className='form-control' name='number' value={data.number} onChange={handleChange}/>
          </div>
         {err.number && <p style={{color:"red"}}>{err.number}</p>}

          <div className='p-2'>
            <label htmlFor="">Password:</label><br />
            <input type="text" className='form-control' name='password' value={data.password} onChange={handleChange}/>
          </div>
         {err.password && <p style={{color:"red"}}>{err.password}</p>}

          <button className='btn btn-warning' onClick={submit1}>Submit</button>
          {/* </form> */}
       </div>
    </div>
  )
}

export default Signin
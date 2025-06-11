// Create react app which contains form with following fields.First Name(Input type text)Lastname(Input type text)
// Email(Input type email) Password(Input type password)Message (Textarea)Gender(Radio Button)City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)
import React, { useState } from 'react';




function Hook3() {
    const[data,setdata]=useState({})

    function hc(event) {
        const{name,value}=event.target
        setdata({...data,[name]:value})
    

  }
  function hs(e){
        e.preventDefault()
        alert("your detail is /n"+data.fname+"email id :"+data.eid+"pass :"+data.pass+"msg :"+data.msg
            +"gender :"+data.gender+" city:"+data.city)        }
  
        return (

    <>
    <form onSubmit={hs}>
        Name:<input type='text' onChange={hc} name='fname'/>
        Password:<input type='text' onChange={hc} name='pass'/>
        Email:<input type='email' onChange={hc} name='eid'/>
        Gender:
        <input type='radio' onChange={hc} name='gender' value="male"/>Male
     <input type='radio' onChange={hc} name='gender' value="female"/>   Female

            <select onChange={hc} name="city">
                <optgroup>select</optgroup>
                <option >Ahmedabad</option>
                <option >surat</option>
                <option >Baroda</option>
                

            </select>


        <textarea type="text" name="msg" onChange={hc}>Message</textarea>
        <input type='submit'/>
        </form>
    </>

  );

}
export default Hook3
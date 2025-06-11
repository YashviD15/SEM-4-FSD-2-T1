import React , { useState }from 'react'

function Hook4() {
    const[obj,setdata]=useState({})
        function hc(event) {
            const{name,value}=event.target
            setdata({...obj,[name]:value})
      }
       function hs(e){
        e.preventDefault()
       if(obj.pass==obj.cpass){
        alert("welcome :"+ obj.fname)
       }
       else{
        alert("Pass and Confirm pass not matched")
       }
    }
  return (
    <div>
        <form onSubmit={hs}>
        Name:<input type='text' onChange={hc} name='fname'/>
        Password:<input type='text' onChange={hc} name='pass'/>
        Confirm Password:<input type='text' onChange={hc} name='cpass'/>
        <input type='submit'/>
     </form>
    </div>

  )

}

export default Hook4
import {React,useState} from 'react'
import { useContractfrom } from './hooks/useContactFrom'


const contactFrom = () => {
    const [form,setForm]=useState({
        name:"",email:"",message:""

    })
    const { loading,succesMessage,errorMEssage,submitContract}=useContractfrom()
    const handelSubmit=(e)=>{
        e.preventDefault()
    }
    const handelChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
        contactFro
        <form onSubmit={handelSubmit}>
            <input
                name='name'
                value={form.name}
                onChange={handelChange}
                placeholder='Your name'
            />

        </form>
         <form onSubmit={handelSubmit}>
            <input
                name='email'
                value={form.email}
                onChange={handelChange}
                placeholder='Your email'
            />

        </form>
         <form onSubmit={handelSubmit}>
            <textarea
                name='Message'
                value={form.message}
                onChange={handelChange}
                placeholder='Your Message'
            />
            <button type='submit' disabled={loading}>
                {loading?"sending..." :"send"}
            </button>

        </form>
        {succesMessage && <p>{succesMessage}</p>}
        {errorMEssage && <p>{errorMEssage}</p>}
    </div>
  )
}

export default contactFrom
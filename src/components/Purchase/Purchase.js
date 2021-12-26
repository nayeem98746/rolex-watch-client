import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/UseAuth';

const Purchase = () => {
    const {register, handleSubmit, reset} = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
      console.log(data)
    }
    return (
        <div>
              <h2 className="m-6" style={{color:'whitesmoke'}}  >YOUR INFORMATION TO ORDER</h2>
        <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
  <input   {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" defaultValue= {user.displayName} /> <br /><br />
  <input   {...register("email", { required: true, maxLength: 20 })} placeholder="Your email" defaultValue={user.email} /> <br /><br />
  <textarea  {...register("address")} placeholder="Address" /><br /><br />
  <input  type="number" {...register("number")} placeholder="phone Number" /><br /><br />
  
      
  <input style={{
    backgroundColor:"pink",
    borderRadius:"25px",
    color:"whitesmoke"
  }}  type="submit" />
</form>
        </div>
    );
};

export default Purchase;
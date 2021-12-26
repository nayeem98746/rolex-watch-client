import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit , reset} = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => {
         console.log(data)

    axios.post('http://localhost:5000/services', data)
    .then(res => {
        console.log(res)
        if(res.data.insertedId){
            alert('added  successfuly')
            reset()
        }
    })
}
    

 
    return (
        <div>
            <h2>add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> 
      <br/><br/>
      <textarea {...register("description" )} placeholder="Description" /><br/><br/>
      <input type="number" {...register("price")} placeholder="price" /><br/><br/>
      <input {...register("img" )} placeholder="img url" /><br/><br/>
      <input  type="submit" />
    </form>
        </div>
    );
};

export default AddService;
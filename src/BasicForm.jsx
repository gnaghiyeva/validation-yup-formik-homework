import React from 'react'
import { useFormik } from "formik"
import { BasicFormValidation } from './schema';
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from './api/httprequests';
import "./form.css"
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button, Checkbox, Container, FormControlLabel, TextField } from '@mui/material';

const containerStyles = {
    boxShadow: '1px 2px 9px #F4AAB9',
    margin: '4em',
    padding: '1em',
    
  };

const BasicForm = () => {
    //form submit function
    const handleSubmit = (values, actions) => {
        values.id = uuidv4();
        console.log('submitted');
        console.log('values', values)
        console.log('actions', actions)
        axios.post("http://localhost:3000/products",values)
        toast.success('Product added successfully');
        actions.resetForm();

    }
    const formik = useFormik({
        //2
        initialValues: {
            name: "",
            price: "",
            discountPercentage:"",
            imageURL:"",
            unitsInStock: "",
            isDiscounted:false
        },

        onSubmit: handleSubmit,
        validationSchema: BasicFormValidation
    })
    return (
        //3
        <Container hoverable style={{display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid black', width:'30%',borderRadius:'10px', marginTop:'100px', boxShadow: '1px 2px 9px #200',
        }}>
            
        <form style={{ marginTop:'50px'}} onSubmit={formik.handleSubmit}>
            <div style={{textAlign:'center'}}>
            <h3>Product Add Form</h3>
            <a style={{color:'black'}} href='http://localhost:3000/products'>API link to check</a><br/>
            <a style={{color:'green'}} href='http://localhost:3001/products'>Product Cards</a>
            </div>
            <br/>
           <TextField style={{marginBottom:'15px'}} className={(formik.errors.name && formik.touched.name) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' placeholder='Enter name' type='text'>  </TextField>
            {(formik.errors.name && formik.touched.name) && <p style={{ color: 'red' }}>{formik.errors.name}</p>}
           <br/>
            <TextField style={{marginBottom:'15px'}} className={(formik.errors.price && formik.touched.price) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.price} name='price' placeholder='Enter price' type='number'></TextField> 
            {(formik.errors.price && formik.touched.price) && <p style={{ color: 'red' }}>{formik.errors.price}</p>}
            <br/>
           
            <TextField style={{marginBottom:'15px'}} className={(formik.errors.discountPercentage && formik.touched.discountPercentage) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.discountPercentage} name='discountPercentage' placeholder='Enter discountPercentage' type='number'></TextField> 
            {(formik.errors.email && formik.touched.email) && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
            <br/>
            <TextField style={{marginBottom:'15px'}} className={(formik.errors.imageURL && formik.touched.imageURL) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.imageURL} name='imageURL' placeholder='Enter imageURL' type='text'></TextField> 
            {(formik.errors.imageURL && formik.touched.imageURL) && <p style={{ color: 'red' }}>{formik.errors.imageURL}</p>}
            <br/>
            <TextField style={{marginBottom:'15px'}} className={(formik.errors.unitsInStock && formik.touched.unitsInStock) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.unitsInStock} name='unitsInStock' placeholder='unitsInStock' type='number'></TextField> 
            {(formik.errors.unitsInStock && formik.touched.unitsInStock) && <p style={{ color: 'red' }}>{formik.errors.unitsInStock}</p>}
            <br/>
            {/* <FormControlLabel  className={(formik.errors.isDiscounted && formik.touched.isDiscounted) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.isDiscounted} name='isDiscounted' id="isDiscounted" type='checkbox' control={<Checkbox defaultChecked />} label="Is Discounted?" /> */}
            <label htmlFor="">isDiscounted</label>
            <input className={(formik.errors.isDiscounted && formik.touched.isDiscounted) ? "input-error" : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.isDiscounted} name='isDiscounted' id="isDiscounted" type='checkbox' />
            {(formik.errors.isDiscounted && formik.touched.isDiscounted) && <p style={{ color: 'red' }}>{formik.errors.isDiscounted}</p>}
            <br/> <br/>
            <Button style={{width:'100%',marginBottom:'20px'}} color='success' variant='contained' disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type='submit'>Register</Button>
       
        </form>
        </Container>
    )
}

export default BasicForm
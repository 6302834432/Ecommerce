import React from 'react'
import './Addproduct.css'
import { useState } from 'react'
import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
    const [image,SetImage]=useState(false)
    const ImageHandler=(e)=>{
        SetImage(e.target.files[0]);
    }
    const [ProductDetails,SetProductDetails]=useState({
        name:"",
        new_price:"",
        old_price:"",
        category:"women",
        image:""



    })
    const changeHandler=(e)=>{
        SetProductDetails({...ProductDetails,[e.target.name]:e.target.value})
    }
    const Add_Product=async ()=>{
        console.log(ProductDetails);
        let ResponseData;
        let Products=ProductDetails;
        let formdata=new FormData();
        formdata.append('product',image);
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formdata,
        }).then((resp)=>resp.json()).then ((data)=>{ResponseData=data})
        console.log(ResponseData)
            if (ResponseData.success){
                Products.image=ResponseData.image_url;
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(Products),
            }
                ).then((res)=>res.json()).then((data)=>{
                    console.log (data)
                    data.success?alert("product added"):alert("Failed")})
            }
            
    }
    return (
        <div className='addproduct'>
            <div className='addproduct-itemfield'>
                <p>Product title</p>
                <input  value={ProductDetails.name}  onChange={changeHandler} type='text' placeholder='Type here...' name='name' />

            </div>
            <div className='addproduct-itemfield'>
                <div className='addproduct-price'>
                    <p>Price</p>
                    <input  value={ProductDetails.old_price} onChange={changeHandler} type='text' name="old_price" placeholder='Type here ...' />
                </div>

                <div className='addproduct-itemfield'>
                    <div className='addproduct-price'>
                        <p>Offer price</p>
                        <input value={ProductDetails.new_price} onChange={changeHandler} type='text' name="new_price" placeholder='Type here ...' />
                    </div>
                </div>


                <div className='addproduct-itemfield'>
                    <p> Product Category</p>
                    <select value={ProductDetails.category}  onChange={changeHandler} name='category' className='addproduct-selector'>
                        <option value='women'>Women</option>
                        <option value='men'>Men</option>
                        <option value='kids'>Kids</option>

                    </select>
                </div>
                <div className='addproduct-itemfield'>
                    <label htmlFor='file-input'>
                        <img  src={image?URL.createObjectURL(image):upload_area} alt='' className='addproduct-thumbnail' />
                    </label>
                    <input  onChange={ImageHandler} type='file' name="image" id='file-input' hidden/>
                </div>
                <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
            </div>


        </div>
    )
}

export default Addproduct
import React, { useState } from 'react'
import './InputField.css'
import TabelData from './TabelData';

export default function InputField() {
    const[enteredId,setEnteredId]=useState('');
    const[enteredPrice,setEnteredPrice]=useState('');
    const[enteredDish,setEnteredDish]=useState('');
    const[enteredTable,setEnteredTable]=useState('');
    const[orders,setEnteredOrder]=useState([]);

    const idChangeHandler=(event)=>{
        console.log(enteredId);
       setEnteredId(event.target.value);

    }
    const priceChangeHandler=(event)=>{
        console.log(enteredPrice);
       setEnteredPrice(event.target.value);

    }
    const dishChangeHandler=(event)=>{
        console.log(enteredDish);
       setEnteredDish(event.target.value);

    }
    const tableChangeHandler=(event)=>{
        console.log(enteredTable);
       setEnteredTable(event.target.value);

    }

    const submitHandler=(event)=>{
       event.preventDefault();
       const order = {
        id:enteredId,
        price:enteredPrice,
        dish:enteredDish,
        table:enteredTable
       }
       setEnteredOrder((preorders)=>
        [...preorders,order]);

    }
    
  return (
    <div className='mt-5'>
        <h2 className='heading'>PLACE YOUR ORDER HERE!</h2>
        <form onSubmit={submitHandler} className='mt-2'>

       
      <label htmlFor="id">UNIQUE USER ID:</label>
      <input type="text" onChange={idChangeHandler} value={enteredId} id='id'className='mx-2'/>
      <label htmlFor="id">CHOOSE PRICE:</label>
      <input type="text" onChange={priceChangeHandler} value={enteredPrice} id='price' className='mx-2'/>
      <label htmlFor="id">CHOOSE DISH:</label>
      <input type="text" onChange={dishChangeHandler} value={enteredDish} id='dish' className='mx-2'/>
      <label htmlFor="id">CHOOSE A TABLE:</label>
    <select onChange={tableChangeHandler} value={enteredTable} id='table' className='mx-2'>
    <option value="TABLE 1">TABLE 1</option>
    <option value="TABLE 2">TABLE 2</option>
    <option value="TABLE 3">TABLE 3</option>
    </select>
    <button className='btn btn-success mx-3'>ADD TO BILL</button>
    </form>

{/* <div className="orders mt-5">
    {orders.map((order,index)=>(
   <div className='order-item' key={index}>
   <h2>{order.table}</h2>
   <div>Id:{order.id}</div>
   <div>Price:{order.price}</div>
   <div>Dish:{order.dish}</div>
   <div>Table:{order.table}</div>
   </div>
    ))}
    </div> */}

    <TabelData orders={orders} />

    </div>
  )
}

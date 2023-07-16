import React from 'react';

export default function TabelData({ orders }) {
const deleteData=(event)=>{
    event.target.parentNode.remove();
}
  return (
    <div>
      <div className='mt-5'>
        <h3 className='table mt-5'>TABLE 1</h3>
        {orders
          .filter((order) => order.table === 'TABLE 1')
          .map((order, index) => (
            <div key={index}>
           
              <p>{order.table} Order ID: {order.id} Price: {order.price} Dish: {order.dish} 
              <button className='btn btn-danger mx-2 mt-2' onClick={deleteData}>DELETE</button></p>
            
             
            </div>
          ))}
      </div>
      <div>
        <h3 className='table'>TABLE 2</h3>
        {orders
          .filter((order) => order.table === 'TABLE 2')
          .map((order, index) => (
            <div key={index}>
            
              <p>{order.table} Order ID: {order.id} Price: {order.price} Dish: {order.dish}
              <button className='btn btn-danger mx-2 mt-2' onClick={deleteData}>DELETE</button></p>
             
            </div>
          ))}
      </div>
      <div>
        <h3 className='table'>TABLE 3</h3>
        {orders
          .filter((order) => order.table === 'TABLE 3')
          .map((order, index) => (
            <div key={index}>
            
              <p>{order.table} Order ID: {order.id} Price: {order.price} Dish: {order.dish}
              <button className='btn btn-danger mx-2 mt-2' onClick={deleteData}>DELETE</button></p>
             
            </div>
          ))}
      </div>
    </div>
  );
}

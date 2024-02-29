import React, { useState } from 'react';
import './App.css';
import './demo.css';

function App() {

const [pname, setPName] = useState("");
const [price, setPrice] = useState(0);
const [quantity, setQuantity] = useState(0);
const [total,setTotal] = useState("");

function calMul(){
  setTotal("Total Amount : " + price*quantity);
}

function nameChng(event){
  setPName(event.target.value);
}
function pChng(event){
  setPrice(event.target.value);
}
function qChng(event){
  setQuantity(event.target.value);
}

  return (
    <>
    <p>Product Name : <input type='text' onChange={(event) => {setPName(event.target.value)}}></input></p>
    <p>Unit Price : <input type='text' onChange={pChng}></input></p>
    <p>Quantity : <input type='text' onChange={qChng}></input></p>
    <button onClick={calMul}>Get Total</button>

    <p>{total}</p>
    
    </>
  );
}
export default App;

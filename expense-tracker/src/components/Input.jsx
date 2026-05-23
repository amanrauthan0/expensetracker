/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Input({log,setlog}){

    const[type,settype]=useState("");
    const[title,settitle]=useState("");
    const[amount,setamount]=useState();
    const[category,setcategory]=useState("");

    function deletetransaction(index) {
      console.log("clicked")
      setlog(prev => prev.filter((_, i) => i !== index));
    }

    const handlesubmit=(e)=>{
      e.preventDefault();
      console.log(log)

    if (
      type === "" ||
      title.trim() === "" ||
      amount === ""||
      category===""
    ) {
      alert("Enter all fields");
      return;
    }

    setlog(prev => 
        {
         const prevlog = [...prev,
          { type, title, amount, category}];
          return prevlog;
        
        }
    );
    
    settype("");
    settitle("");
    setamount("");
    setcategory("")
    }

return(

<div className="bg-white rounded-3xl shadow-lg p-8">
 <form
 className="grid grid-cols-2 gap-4"
 onSubmit={handlesubmit}
 >
    <input
    type="number"
    value={amount}
    placeholder="Amount"
    onChange={(e)=>setamount(e.target.value)}
    className="
    border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="text"
      value={title}
      placeholder="Title"
      className=" border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
      onChange={(e)=>settitle(e.target.value)}

    />

    <select 
    value={type} 
    onChange={(e)=>settype(e.target.value)} 
      className=" border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">Type</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
    </select>

    <select 
    value={category} 
    onChange={(e)=>setcategory(e.target.value)} 
      className=" border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="category">
        <option value="">Category</option>
        <option value="salary">salary</option>
        <option value="investement">investement</option>
        <option value="rent">rent</option>
        <option value="bills">bills</option>
        <option value="groccery">groccery</option>
        <option value="entertainment">entertainment</option>
        <option value="miscellaneous">miscellaneous</option>
    </select>

    <button 
    className=" border col-span-2" 
    type="submit">
        ADD
    </button>
  
  </form>

  <h1 className="pl-2 mt-3">TRANSACTIONS</h1>
  
  <ul className=" font-mono mt-3 space-y-3 ">

    {log.map((item,i)=>(
        <li
        key={i}
        className="bg-gray-50 rounded-xl shadow-sm p-4 pb-2 flex justify-between items-center">
            <span className="w-10">{item.title}</span>
            <span className="w-10">{item.amount}</span>
            <span className="w-10">{item.type}</span>
            <button
              type="button"
              onClick={() => {console.log("hello world") ;deletetransaction(i)}}
              className="text-red-500"
            >
              <img className="h-5 bg-amber-50" src='/recycle-bin.png' alt="delete" />
            </button>
        </li>
        
    ))}
  
  </ul>

</div>
    )
}
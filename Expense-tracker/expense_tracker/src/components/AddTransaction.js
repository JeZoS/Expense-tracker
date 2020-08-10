import React,{useState,useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";


function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');

    const onSubmit= e =>{
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random()*10000000),
            text,
            amount:parseInt(amount)
        }
        addTransaction(newTransaction);
    }

    return (
    <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label >Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label >Amount <br /> (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
    )
}

export default AddTransaction

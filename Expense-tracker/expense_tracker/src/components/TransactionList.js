import React,{useContext,useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
    const { transaction,getTransactions } = useContext(GlobalContext);
    useEffect(()=>{
        getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);    
    return (
        <div>
            <ul id="list" className="list">
                {transaction.map((item)=>(
                    <Transaction key={item._id} item={item}/>
                ))}              
            </ul>
        </div>
    )
}

export default TransactionList

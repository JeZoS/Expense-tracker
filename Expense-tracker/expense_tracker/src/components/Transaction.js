import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

function Transaction({item}) {
    const sign = item.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <div>
            <li  className= {item.amount < 0 ? "minus" : "plus"}>
                        {item.text} <span>{sign}${Math.abs(item.amount)}</span><button onClick={()=>deleteTransaction(item._id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction

import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
    const { transaction } = useContext(GlobalContext);
    const amounts = transaction.map(item => item.amount);
    const amount = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${amount}</h1>
        </div>
    )
}

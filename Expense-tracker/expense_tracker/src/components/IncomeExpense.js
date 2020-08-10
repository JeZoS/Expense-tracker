import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

function InocomeExense() {
  const {transaction} = useContext(GlobalContext);
  const amounts = transaction.map(item => item.amount);
  const amount = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const positive = amounts
                .filter(item=>item > 0)
                .reduce((acc,item)=>(acc+=item),0)
                .toFixed(2);
  const negative = positive - amount
    return (
        <div>
             <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${positive}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(negative)}</p>
        </div>
      </div>
        </div>
    )
}

export default InocomeExense

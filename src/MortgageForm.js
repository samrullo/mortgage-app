import React from "react";

import { ReactDOM } from "react";
import { useState } from "react";

function MortgageForm(props){
    const [borrowed_amount,setBorrowedAmount]=useState();
    const [interest_rate,setInterestRate]=useState();
    const [borrowing_time,setBorrowingTime]=useState();
    const [smm, setSMM]=useState();

    const number_formatter=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 });

    function calc_smm(a, y, t){
        y=y/100;
        const result = a * (y / 12) * (1 + y / 12) ** (t * 12) / ((1 + y / 12) ** (t * 12) - 1);
        setSMM(result);
    }
    
    
    
    return (
    <div>
        <div className="mb-3">
            <label for="borrowed_amount" className="form-label">Borrowed amount</label>
            <input className="form-control" type="number" step="0.01" id="borrowed_amount" placeholder="borrowed amount" 
            value={borrowed_amount}
            onChange={event=>setBorrowedAmount(event.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="interest_rate" className="form-label">Interest rate</label>
            <input className="form-control" type="number" step="0.01" id="interest_rate" placeholder="interest rate in %" 
            value={interest_rate}
            onChange={event=>setInterestRate(event.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="borrowing_time" className="form-label">Borrowing time in years</label>
            <input className="form-control" type="number" id="borrowing_time" placeholder="borrowing time in years" 
            value={borrowing_time}
            onChange={event=>setBorrowingTime(event.target.value)}/>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" onClick={()=>calc_smm(borrowed_amount,interest_rate,borrowing_time)}>Submit</button>
        </div>
        <div>SMM : <span>{number_formatter.format(smm)}</span></div>
    </div>
    

    )
}

export default MortgageForm;
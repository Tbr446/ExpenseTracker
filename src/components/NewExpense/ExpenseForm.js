import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => { 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

     
    const titleChangeHandler = (event) => {

        console.log("new title", event.target.value);
        setEnteredTitle(event.target.value);

        // SHOULD USE THE BELOW FORMAT WHEN DEPENDING ON PRIOR STATE
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });

    };
    

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);

    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),

        };


        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }; 

return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className='new-expense__control'>
            <label>Title</label>
            <input onChange={titleChangeHandler} type='text' required value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input onChange={amountChangeHandler} type='number' min="0.01" step="0.01" required value={enteredAmount}/>

        </div>
        <div className='new-expense__control'>
            <label>Date</label> 
            <input onChange={dateChangeHandler} type='date' min='2019-01-01'max='2022-12-31' required value={enteredDate}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Close</button>
        <button type='submit'>Add Expense</button>
    </div>

</form>
)
};

export default ExpenseForm;
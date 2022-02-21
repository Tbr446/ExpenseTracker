import React from 'react';
//useState ALWAYS returns a two item array

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  // console.log('hi');
  // below syntax is for useState(), [first element is a pointer to the value, second value is the function ]
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!')
  // Consider naming functions that handle events ending with "Handler"
  //   console.log(title);
  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;

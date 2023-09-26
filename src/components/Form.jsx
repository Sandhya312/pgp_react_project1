/* eslint-disable react/prop-types */

 import { useState } from 'react';
import classes from './Form.module.css';

const Form = (props) =>{

  const [name,setName] = useState('');
  const [number,setNumber]=useState('');
  const [expMnth,setExpMnth]=useState('');
  const [expYear,setExpYear]=useState('');
  const [cvcNo,setCvcNO]=useState('');


  const formSubmitHandler = event =>{
    event.preventDefault();
     // eslint-disable-next-line react/prop-types
     props.CardHolderName(name);
     props.CardNumber(number);
    props.Expiremonth(expMnth);
     props.ExpireYear(expYear);
     props.Cvc(cvcNo);
    // eslint-disable-next-line react/prop-types
    console.log({"props":props.CardHolderName});
    console.log(name,number,expMnth,expYear,cvcNo);
  }


  const nameChangeHandler = (e)=>{
    console.log("value",e.target.value);
    setName(e.target.value);

  }

  const numberChangeHandler = (e) =>{
    console.log("helo");
    setNumber(e.target.value);
  }

  const monthChangeHandler = (e) =>{
    console.log("df;dkfj");
    setExpMnth(e.target.value);
  }

  const yearChangeHandler = (e) =>{
    console.log(";dfjd;lfdfhelo");
    setExpYear(e.target.value);
  }


  const cvcChangeHandler = (e) =>{
    console.log("hes");
    setCvcNO(e.target.value);
  }
    return (

      <form action="" onSubmit={formSubmitHandler}>
        
        <div className={classes.form}>
          <div className={classes.inputField}>
            <label htmlFor="CARDHOLDER NAME">CARDHOLER NAME</label>
            <input onChange={nameChangeHandler} type="text" placeholder="e.g. Jane Appleseed" />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="CARD NUMBER">CARD NUMBER</label>
            <input onChange={numberChangeHandler} type="number" placeholder="e.g. 1234567891230000" />
          </div>
          <div className={classes.expDetails} >
           <div className={classes.inputField}>
           <label htmlFor="EXP. DATE(MM/YY)">EXP. DATE(MM/YY)</label>
            <div>
            <input onChange={monthChangeHandler} type="number" placeholder="MM" />
            <input onChange={yearChangeHandler} type="number" placeholder="YY" />
            </div>
           </div>
           <div className={classes.inputField}>
            <label htmlFor="CVC" >CVC</label>
            <input onChange={cvcChangeHandler} type="number" placeholder="e.g. 123" />
           </div>
            
          </div>
          <div>
            <button type='submit'>Confirm</button>
          </div>
        </div>
      </form>


    )
}


export default Form;

import classes from './Home.module.css';
import Form from './Form';

import { useState } from 'react';

function Home(){

   const [enteredCardHoldername,setCardHoldername]=useState('');
   const [enteredCardNumber,setCardNumber]=useState('');
   const [enteredExpireMonth,setExpireMonth]=useState('');
   const [enteredExpireYear,setExpireYear]=useState('');
   const [enteredCvc,setCvc]=useState('');



    return (

     <div className={classes.home}>
     <div className={classes.left}>
      
    </div>
    <div className={classes.card1}>
         <div className={classes.cardNumber}>
            <p>{enteredCardNumber.substring(0,3)}</p> <p>{enteredCardNumber.substring(4,7)}</p> <p> {enteredCardNumber.substring(8,11)} </p>  <p> {enteredCardNumber.substring(12,15)} </p>
            <p>{enteredCardNumber.substring(16,19)}</p>
         {/* <p>0000</p> <p> 0000 </p> <p> 0000 </p> <p>  0000</p> <p>  0000</p> */}
         </div>

         <div className={classes.cardHolder}>
            <p>{enteredCardHoldername}</p>
            {/* <p>JANE APPLESEED</p> */}
         </div>

         <div className={classes.expiry}>
            <p>{enteredExpireMonth} / {enteredExpireYear}</p>
            {/* <p>00 / 00</p> */}
         </div>

       </div>
       <div className={classes.card2}>
         <p>{enteredCvc}</p>
          {/* <p>123</p> */}
       </div>
    
    <div className={classes.right}>
     <Form

     CardHolderName={setCardHoldername}
     CardNumber={setCardNumber}
     Expiremonth={setExpireMonth}
     ExpireYear={setExpireYear}
     Cvc ={setCvc}
     
     />

    </div>
     </div>
    
    )
}


export default Home;
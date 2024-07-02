
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  const [amount,setamount] = useState(0);
  const [cridts,setcridts] = useState(0);
  const [time,settime] =  useState(0);
  const [bookmarks,setcurse] =  useState([]);
  const [remaingtime,setremaingtime] = useState(20);
  const [error,seterror] = useState('');
  const handelcourse = (amu,cri,tme,crse) =>{
    const newamount = amount +amu;
   
    
    const newcredits = cridts + cri;
    
    const newtime = time + tme;
    
    if(newtime>20){
      seterror('You have exceed time');
      return;
    }
    
    if(newcredits>20){
      seterror('You  have exceed credit')
    }
    
     
    const newcourse =  [...bookmarks,crse];
    if (bookmarks.includes(crse)) {
      seterror('This course is already added');
      return;
    }
    
    setcurse(newcourse);
    setcridts(newcredits);
    settime(newtime);
    setamount(newamount);
    setremaingtime(20-newtime);
    seterror('');
  }


  return (
    <>
    <Header></Header>
    <div className='flex max-w-7xl mx-auto'>
      <Courses handelcourse={handelcourse}></Courses>
      <Bookmarks  amount={amount} cridts={cridts} time={time} bookmarks={bookmarks} error={error} remaingtime={remaingtime} ></Bookmarks>
    

    </div>
      
    </>
  )
}

export default App

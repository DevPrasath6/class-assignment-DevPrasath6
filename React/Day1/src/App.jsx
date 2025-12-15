import './App.css'
import { useState } from 'react'
import Parent from './components/Parent';

function App() {
    // let fname = "Dev";
    const [fname,setfName] = useState("Dev");
    const [gift,setGift] = useState("PS5");
    const [data,setData] = useState([]);

    const giftFromChild = (data) => {
        console.log("Gift from Child: ",data);
        setData(data);
    }

    // state = {
    //     fname:"Dev"
    // };
  return (
    <>
        <h1>Welcome To My React App</h1>
        <h2>Hello, {fname}!</h2>
        <button onClick={()=> setfName("John")}>Change Name</button>
        <Parent gift={gift} giftFromChild={giftFromChild}/>
                {data.map((value,index) =>{
            return <li>{value}</li>
        })}
    </>
  )
}



export default App

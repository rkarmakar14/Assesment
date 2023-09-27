import { useEffect, useState } from 'react'
import './App.css'
import Box1 from './components/box1'
import Box2 from './components/box2';

function App() {
  // const [count, setcount] = useState(0);
  // const [data, setdata] = useState("ajay");
  // useEffect(() => {
  //   console.log("App Mounted", count);
  // },[data]);
 
  return (
    <>
    {/* {count}
    <button onClick={(e) =>{
    setcount(count+1);
    setdata('Rahul')
    }}>Click me</button>
    {console.log('HTML content')}

    {data} */}
    <Box1/>
    <Box2/>
    </>
  )
}

export default App

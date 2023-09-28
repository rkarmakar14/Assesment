import { useEffect, useState } from 'react'
import './App.css'
import Box1 from './components/box1'
import Box2 from './components/box2';

function App() {
  const [box2activeflg, setbox2activeflg] = useState(false)
  const [allowSpeak, setallowSpeak] = useState(false)
  
  const speakNowcall = (data) => {
    console.log("speakNowcall function", data)
    setallowSpeak(data)
  }
  const callbackbox1 = (data) => {
    console.log("callbackcalled", data);
    setbox2activeflg(data);
  }
  return (
    <>
    <Box1 callbackbox1 = {callbackbox1} speakNow = {speakNowcall} timeValue = {20}/>
    <Box2 box2active = {box2activeflg} allowSpeak = {allowSpeak} timeValue = {60} />
    </>
  )
}

export default App

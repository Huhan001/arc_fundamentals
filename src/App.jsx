import {Count, CountValue, HookCount } from "./count";
import { Button2, Button3, Button4 } from "./Button";
import { useState } from "react";
import { Elephant2, Elephant3 } from "./Elephant";
import style from './Elephant.module.css'

function App() {
  // let [count, setCount] = useState(0)
  // if you want to add classes you use className instead of class
  // if you want to add two or more divisions you need to wrap them in a div
  const [count, setCount] = useState(0);
  return  ( 
  <div className= {style.App}

  // style is an object
  // the object is an expression
    // style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginTop: '25%'
    // }}
  > 
    <Elephant2 />
    <Elephant3 />
    {/* using division doesn't necessitate the usage of the fragment */}
    {/* do this if you do not plan or intend to add more elements */}
    {/* <Count /> */}
    <CountValue number = {count} />
    {/* {count < 3 ? <CountValue number = {count} /> : null} */}
    {/* <CountValue number = {count} /> */}
    <Button2 setCount={setCount} />
    <Button3 setCount={setCount} />
    <Button4 setCount = {setCount}/>
    {/* <HookCount /> */}
    {/* <Button /> */}
  
  </div>
  
  );
}

export default App

// in react a component is a function that returns JSX
// always want to split the UI into separate components
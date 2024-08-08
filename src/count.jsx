import { useState } from "react";

export const Count = () => {

    // props are objects that are passed to components

    // every single component in react must return a single JSX element
    return (<div>
            <span>0</span>
            <CurrentCount number = {56} limit = {false}/> 
            </div>
    );
}

// components are written with a capital letter
// instead of of using props, you can destructure the props object
// even better is doing the destructuring in the function signature
const CurrentCount = ({number, limit}) => {
    // return <p> {props.limit ? "limit reached" : props.number} </p>
    // const { number, limit } = props;
    return <p> {limit ? "reached after successful destructuring" : number + " whatever man 🔥"} </p>
}

// you cannot export a default and a named export in the same file
// only regular function can be exported as default

export const HookCount =() => {
    const [number, setNumber] = useState(0);
    // const [limit, setLimit] = useState(false)
    // wrong implementation
    // const handleClick =() => setNumber(number + 1) 
    // i should never call a function from in here but rather supply it
    // return <span onClick={handleClick}> {number} </span>
    return <span onClick={() => setNumber(number + 2)}> {number}</span>
}

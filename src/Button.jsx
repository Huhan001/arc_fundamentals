export const Button = () => {
    const handleClick = () => {
        console.log('clicked')
        console.log('clicked')
    }
    // can pass in a function as a prop
    // a prop is a property that is passed to a component
    // a component can be a function or a class
    // thereby a prop can very well be a function

    // you do not want to call the function immediately because it will be called immediately
    // instead pass a reference to the function
    return <button onClick={handleClick}>+</button>
}

// this is an event handler

export const Button2 = ({setCount}) => {

    return (
        <button onClick={() => setCount((prev) => prev + 1)} >+</button> 
        // im calling it all the time hence why its failing
    )
}

export const Button3 = ({setCount}) => {
    return (
        <button onClick={() => setCount(prev => prev -1)}> - </button>
    )
}

export const Button4 = ({setCount}) => {
    let resets = 0
    return <button onClick={() => setCount((prev) => prev = resets)}> 🌯 </button>
}


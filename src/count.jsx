const Count = () => {

    // every single component in react must return a single JSX element
    return (<div>
            <span>0</span>
            <CurrentCount /> 
            </div>
    );
}

// components are written with a capital letter
const CurrentCount = () => {
    return <p> whatever this be</p>
}

export default Count
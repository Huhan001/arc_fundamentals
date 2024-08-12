import style from './Elephant.module.css'
// since i imported the css file over Headers, it will now be available across the whole application
// something that is not idea
// to limit it to a specific component i will have to add module to the css file

// i can also use the style object to style the component not a good idea
export const Elephant = () => {
    return (
        <span style={{
            color: 'red',
            fontSize: '50px',
        }}>0</span>
    )
}

// i can also use the style object to style the component.
export const Elephant2 = () => {
    return (
        <span className= {style.appear}> 345 </span>
    )
}

// you can also use tailwind that helps clear away the need for creative naming of classes

export const Elephant3 = () => {
    return (
        <span className= {style.drink}>whatever it be</span>
    )
}

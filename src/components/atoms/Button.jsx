import './Button.css'

function Button(props){
    const handlerClick = (event)=> {
        console.log(event.target.name);
    }

    return <button onClick={handlerClick} id="calc-btn" name={props.val}>{props.val}</button>
}

export default Button
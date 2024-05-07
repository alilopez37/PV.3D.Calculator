import './Button.css'

function Button(props){
    console.log(props)
    return <button id="calc-btn">{props.val}</button>
}

export default Button
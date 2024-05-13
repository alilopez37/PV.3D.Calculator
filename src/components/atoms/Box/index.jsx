import style from './index.module.css'

function Box(props) {
    return <div id={style.calc_box}>{props.val}</div>
}

export default Box


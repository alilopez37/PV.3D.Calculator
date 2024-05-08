import Button from "../atoms/Button"
import Box from "../atoms/Box"
import './Calculator.css'

function Calculator(){
    let sym = ["0","1","2","-","3","4","5","+","6","7","8","*","9","C","=","/"]

    return (
        <>
            <div>
                <Box></Box>
            </div>
            <div id="calc_box_btn">
                {sym.map( char => <Button key={char} val={char}></Button>)}
            </div>
        </>
    )
}

export default Calculator
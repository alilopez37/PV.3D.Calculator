import { useState } from "react"
import Button from "../atoms/Button"
import Box from "../atoms/Box"
import './Calculator.css'

function Calculator(){
    const [exp, setExp] = useState('')
    let sym = ["0","1","2","-","3","4","5","+","6","7","8","*","9","C","=","/"]
   
    return (
        <>
            <div>
                <Box val={exp}></Box>
            </div>
            <div id="calc_box_btn">
                {sym.map( char => <Button key={char} val={char} exp={exp} setExp={setExp}></Button>)}
            </div>
        </>
    )
}

export default Calculator
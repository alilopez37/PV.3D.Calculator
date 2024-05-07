import Button from "../atoms/Button"

function Calculator(){
    let sym = ["0","1","2","3","4","5"]
    return (
        sym.map( char => <Button val={char}></Button>)
    )
}

export default Calculator
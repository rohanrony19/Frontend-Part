import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
function Bootstrap(){
    return(
        <>
        <h1>Add Bootstrap in React JS</h1>
        <Button>OK</Button>
        <Alert>Error</Alert>
        <Button variant="danger">Dont</Button>
        <Alert variant="succes">Done</Alert>
        <Button onClick={()=>alert("Bootstrap Button")} variant="danger">Bootstrap</Button>
        </>
    )
}

export default Bootstrap
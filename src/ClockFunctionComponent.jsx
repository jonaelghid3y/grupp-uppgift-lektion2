
import React, {useState ,useEffect} from 'react'

function ClockFunctionComponent() {
    const [date, setDate] = useState(new Date());
    let timerID = "";
    useEffect (()=>{
        timerID = setInterval(
            tick,
            1000
        );
        return()=>{
            clearInterval(timerID)
        }
    },[])
    function tick(){
        setDate(new Date());
    }
    return (
        <div>{date.toLocaleTimeString()}</div>
    )
}

export default ClockFunctionComponent
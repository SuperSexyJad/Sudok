import { useState } from 'react'

function OurComponent(props){
    const [strawBerryCount, setStrawBerryCount] = useState(0)

    function handleClick(){
        setStrawBerryCount((prev) => prev + 1);
    }
    return (
        <>
        <h3>
            <p> There are {strawBerryCount} strawberries and we are feeling {props.mood}</p>
            <button onClick = {handleClick}> Increase strawberries </button> 
        </h3>
        </>
    )
}

export default OurComponent;
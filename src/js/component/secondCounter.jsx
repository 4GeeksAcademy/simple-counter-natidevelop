import React from "react"
import Card from "./card.jsx"


const SecondCounter=({numero})=>{
   
    return(
    <div className="d-flex">
        <Card numero={Math.floor(numero/100000 %10)}/>
        <Card numero={Math.floor(numero/10000 %10)}/>
        <Card numero={Math.floor(numero/1000 %10)}/>
        <Card numero={Math.floor(numero/100 %10)}/>
        <Card numero={Math.floor(numero/10 %10)}/>
        <Card numero={numero%10}/>


    </div>


    )

}
export default SecondCounter 
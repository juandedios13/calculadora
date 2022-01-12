import  "../css/body.css"
import React, { useEffect, useState } from "react"
import Numeros from "./Nuemros";
import { Operaciones } from "./operaciones";



const Body = () =>{

    const numeros = [1,2,3,4,5,6,7,8,9,0];
    const [Operacion, setOperacion] = useState("");
    const [Resultado, setResultado] = useState("");
    const operacion = Operaciones(setResultado);
    

    const handleClick = (e) =>{
        
            if(Operacion === ""){
                if(parseFloat(e)){
                    
                    setOperacion(e.toString()+" ")
                }else{
                    alert("Error")
                }
            }else{
                setOperacion(Operacion+e+" ");
            }
        
    }
    
    useEffect(() => {
        setResultado("")
        let array = Operacion.split(" ");
        
        operacion.operacion(array)

        return () => {

        }
    }, [Operacion])

    return(
        <div className="container">
            <div className="contador">
                    {Operacion}= {Resultado}
            </div>
            <div className="containerNumeros">
                <div className="ContainernNumeros">
                    <Numeros  n={numeros} fun ={handleClick}></Numeros>
                </div>
                <div className="signos">
                    <button className="signosButton" onClick={()=> handleClick("+")}>+</button>
                    <button className="signosButton" onClick={()=> handleClick("-")}>-</button>
                    <button className="signosButton" onClick={()=> handleClick("*")}>*</button>
                    <button className="signosButton" onClick={()=> handleClick("/")}>/</button>
                    <button className="signosButton" onClick={()=>{setOperacion(Resultado+" ")}}>=</button>
                </div>
            </div>
            
        </div>
    )
}

export default Body;
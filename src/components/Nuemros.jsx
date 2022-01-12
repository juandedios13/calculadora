import react from "react";

const Numeros = (numeros )=>{

    const n = numeros.n;
    return(
        n.map((e)=>{
            return(
                <button key={e} className="numero" onClick={()=> numeros.fun(e)}> {e} </button>
            )
        })
    )

   

}

export default Numeros;
export const Operaciones = ( setResultado)=>{

    const prioridad1 = (array,signos,pd,signo)=>{
        let arrayAux = [];
        let a = "";
        let b = "";
        let antes = 0;
        let despues = 0;
        let aux1 = [];
        let aux2 = [];
        let resultado = "";
        signos.forEach((e,index)=>{
            
            if( e == pd[0]){
                console.log("entro");
                if(index == 0){
                    if(signos[index+1] == undefined){
                        despues = 0;
                    }else{
                        despues = signos[index+1];
                    }
                }else{
                    antes = signos[index-1];
                    if(signos[index+1] == undefined){
                        
                        despues = 0;
                    }else{
                        despues = signos[index+1];
                    }
                }
            }
        });
        console.log("antes",antes,"despues",despues);
        console.log("signo posicion", pd[0])
        array.forEach((e,index)=>{
            if(antes == 0 && index < pd[0]   ){
                a = a + e.toString();
            }else if(index <= antes || index == 0){
                aux1.push(e)
            }else if(index > antes && index < pd[0] ){
                a = a + e.toString();
            }else if(index < despues && index > pd[0] && index != pd[0] || despues == 0 && index != pd[0] ){
                b = b + e.toString();
            }else if(index >= despues &&  index != pd[0] ){
                aux2.push(e)
            }
        })  

        if(signo == "*"){
            resultado = (a*b).toString();
            
        }else if(signo == "/"){
            resultado = (a/b).toString();
        }else if(signo == "+"){
            resultado = ( parseFloat(a)+ parseFloat(b)).toString();
        }else if(signo == "-"){
            resultado = (a-b).toString();
        }
        if(aux1.length == 0 && aux2.length == 0 ){
            arrayAux.push((resultado).toString());
        }else if(aux1.length == 0){
            arrayAux.push((resultado).toString());
            arrayAux = llenar(arrayAux,aux2);
        }else if(aux2.length == 0){
            arrayAux = llenar(arrayAux,aux1);
            arrayAux.push((resultado).toString());
        }else{
            arrayAux = llenar(arrayAux,aux1);
            arrayAux.push((resultado).toString());
            arrayAux = llenar(arrayAux,aux2);
        }             
         return arrayAux;       

    }

   

    const llenar = (aux,x)=>{

        x.forEach((e)=>{
            aux.push(e);
        })
        return aux;
    }


    const signosf = (array)=>{
        let arrayAux = [];
        let signos = [];
        let division = [];
        let multiplicacion = [];
        array.forEach((e,index)=>{
            if(e == "+" || e == "-" || e == "*" || e == "/"){
                signos.push(index);
                if(e == "/"){
                    division.push(index);
                }else if(e == "*"){
                    multiplicacion.push(index);
                }
            }
        })

        arrayAux.push(signos,multiplicacion,division);
        return arrayAux;
    }

    const operacion = (array)=>{
        let signos = []
        let arrayAux = [];
        let division = [];
        let multiplicacion = [];
        
        signos = signosf(array);
        if(parseFloat( array[array.length-2])>0){
            arrayAux = array;
            if(signos[1].length > 0){
                do {
                    arrayAux = prioridad1(arrayAux,signos[0],signos[1],"*");
                    signos = signosf(arrayAux);
                    console.log(arrayAux);
                } while (signos[1].length > 0);
            }
            if(signos[2].length > 0){
                do {
                    arrayAux = prioridad1(arrayAux,signos[0],signos[2],"/");
                    signos = signosf(arrayAux);
                    console.log(arrayAux);
                } while (signos[2].length > 0);
            }
            

            if( signos[0].length>0){
                let n = 0;
                do {
                    signos[2] = [signos[0][n]];
                        arrayAux = prioridad1(arrayAux,signos[0],signos[2],arrayAux[signos[2][0]]);
                        signos = signosf(arrayAux);
                } while (signos[0].length > 0);
            }
        }
        
        if(arrayAux.length>0){
            setResultado(arrayAux[0].toString());
        } 
        
    }

    return { operacion };
  
}


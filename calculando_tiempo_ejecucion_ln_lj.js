/*
Calculando el tiempo de ejecución de programa usando javascript y lenguaje Núcleo.
1.Traducir el programa al lenguaje núcleo.
2. Utilizar los tiempos de ejecución del núcleo para construir una colección de
ecuaciones que contengan TF1, . . . , TFp. Estas ecuaciones se llaman ecuaciones
de recurrencia pues definen el resultado para n en función de los resultados para
valores menores que n.
3.3. Resolver las ecuaciones de recurrencia para TF1, . . . , TFp.
*/


/**Javascript */


function showValue(value) {
    if (value === 8) {
        console.log("El valor es 8");
    } else {
        console.log("El valor no es 8");
    }
}

/**Lenguaje Núcleo 
 
proc { showValue value}
    if value == 8 then show("El valor es 8")
    else show("El valor no es 8") end
end

TshowValue(tam(I ( { value } ))) = K1 + max(K2, K3) //Tiempo de ejecución de showValue
TshowValue(n) = K1 + max(K2, K3)
TshowValue(n) = K4
TshowValue(n) = O(1)

*/
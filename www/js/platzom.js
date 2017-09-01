//si la palabra termina en "ar, se le quita los dos ultimos caracteres
function platzom(str){
    let traslation = str;

    if(str.toLowerCase().endsWith('ar')){
        traslation = str.slice(0,-2);
    }
    


//si al palabra inicia con z se le añade los caracteres "pe" al final de la palabra
    if(str.toLowerCase().startsWith('z')){
        traslation += 'pe'
    }

//si la palabra traducida tiene 10 o mas letras que se debe partir a la mitat y unir con un guion
    /*let l = str.length;
    if(str.toLowerCase().length >=10){
        let partir = str.slice((l / 2));
        traslation = str.slice(0,-(l / 2)) + '-' + partir;
    }*/
     ///////profe///////
    let length = traslation.length;
    if(length >= 10){
        const half = traslation.slice(0, Math.round(length/2));
        const shalf = traslation.slice(Math.round(length / 2));
        traslation = `${half}-${shalf}`;
    }

//si la palabra proginal es un palindromo ninguna de las reglas funcionan y se devuelve la palabra intercalando entre mayusculas y minisculas
    
const reverse = (str)=> str.split('').reverse().join('');
    function minMay(str){
        const l =str.length;
        let traslation = "";
        let captalize = true;
        for(let i = 0; i< l; i++){
            const char = str.chartAt(i);
            traslation += captalize ? char.toLowerCase() : char.toLowerCase;
    }

    if(str = revese(str)){
        return minMay(str);
    }
    return traslation;
}
console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("dsdfsdasdgasdg"));




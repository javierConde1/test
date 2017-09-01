const nombre = "javier"

const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

function promedioCorrer(){
    const min = 5
    const max = 15
    
    return Math.round(Math.random() * (max - min) + min)
     
}
let totalkm = 0
const lenght = dias.length
for (let i = 0; i < lenght; i++){
    const km = promedioCorrer()
    totalkm += km
    console.log(`El dia ${dias[i]}, ${nombre} corrio ${km} kms`)
}

const prodiokm = totalkm / lenght
console.log(`En promedio, ${nombre} corrio ${prodiokm.toFixed} kms en la semana`)
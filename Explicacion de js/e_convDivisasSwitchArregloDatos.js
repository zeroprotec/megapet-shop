let $pesos1Dolar = 4611.88;
let historicoDolar = [$pesos1Dolar];

let pesosDolar = document.getElementById("pesos1Dolar");
pesosDolar.innerHTML += `<h4>Un dólar equivale a $${$pesos1Dolar} pesos colombianos.</h4>`;

let cambioDivisa = document.getElementById("cambioDivisa");
let histDolar = document.getElementById("histDolar");

let menu = "Seleccione una opción del menú:\n" +
            "1. Convertir de Pesos a Dólares.\n" +
            "2. Convertir de Dólares a Pesos.\n" +
            "3. Actualizar el Precio de Dólar.\n" +
            "4. Mostrar el Histórico del Dólar.\n" +
            "0. Salir."

let pesos, dolares;
do{
    menuOpc = prompt(menu, "Digite un valor numérico")
    
    switch(menuOpc){
        case "1":
            // Bloque de código Convertir de Pesos a Dólares
            pesos = parseFloat(prompt("Digite la cantidad de pesos que tiene:", "10000"));
            dolares = Math.round((pesos * 1 / $pesos1Dolar) * 100) / 100;
            cambioDivisa.innerHTML = `
                <h2>Convertir de Pesos a Dólares</h2>
                <h4>Usted tiene $${dolares} dólares.</h4>
            `;
            break;
        case "2":
            // Bloque de código Convertir de Dólares a Pesos
            dolares = parseFloat(prompt("Digite la cantidad de dólares que tiene:", "100"));
            pesos = Math.round((dolares * $pesos1Dolar / 1) * 100) / 100;
            cambioDivisa.innerHTML = `
                <h2>Convertir de Dólares a Pesos</h2>
                <h4>Usted tiene $${pesos} pesos.</h4>
            `;
            break;
        case "3":
            // Bloque de código Actualizar el Precio de Dólar
            $pesos1Dolar = parseFloat(prompt("Actualice el precio del dólar respecto al peso:", "5000"));
            pesosDolar.innerHTML = "<h3>Precio del Dólar Respecto al Peso</h3>"
            pesosDolar.innerHTML += `<h4>Un dólar equivale a $${$pesos1Dolar} pesos colombianos.</h4>`;
            historicoDolar.push($pesos1Dolar);
            break;
        case "4":
            // Bloque de código Mostrar el Histórico del Dólar
            histDolar.innerHTML = "<h2>Histórico del Dólar</h2>";
            for(let i = 0; i < historicoDolar.length; i++){
                histDolar.innerHTML += `
                    <h4>Registro ${i+1}: $${historicoDolar[i]} </h4>
                `;
            }
            break;
        case "0":
            // Bloque de código Salir
            break;
        default:
            // Bloque de código
            alert("Seleccione una opción válida del menú...");
            break;
    }
} while(menuOpc != "0");

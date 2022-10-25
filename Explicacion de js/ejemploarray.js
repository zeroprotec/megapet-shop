let $pesos1Dolar = 4611.88;

let pesosDolar = document.getElementById("pesos1Dolar");
pesosDolar.innerHTML += `<h4>Un dólar equivale a $${$pesos1Dolar} pesos.</h4>`;

let cambioDivisa = document.getElementById("cambioDivisa");

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
            break;
        case "3":
            // Bloque de código Actualizar el Precio de Dólar
            break;
        case "4":
            // Bloque de código Mostrar el Histórico del Dólar
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

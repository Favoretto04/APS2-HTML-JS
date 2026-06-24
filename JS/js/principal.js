var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++)
{
    const paciente = pacientes[i];

    var alt_val = true;
    var peso_val = true;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if(peso <= 0 || peso > 600)
    {
        console.log("Peso Inválido");
        // paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-inválido");
        peso_val = false;
        tdPeso.textContent = "Peso Inválido"
    }

    if(altura <= 0 || altura > 2.7)
    {
        console.log("Altura Inválida");
        paciente.classList.add("paciente-inválido");
        alt_val = false;
        tdAltura.textContent = "Altura Inválido"
    }

    if(alt_val == true && peso_val == true)
    {
        var imc = peso / (altura * altura);
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2);   
    }
    else
    {
        tdImc.textContent = "-";
    }
}


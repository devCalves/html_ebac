const form = document.getElementById("form-number");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let bMaiora = false;
    const numero1 = document.getElementById("numA");
    const numero2 = document.getElementById("numB");

    if (numero1.value < numero2.value){
        alert("O número B é maior que o número A")
    } else{
        alert("O número B não é maior que o número A")
    }

})



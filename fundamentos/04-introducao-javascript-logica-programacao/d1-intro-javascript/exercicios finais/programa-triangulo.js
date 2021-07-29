let lado1;
let lado2;
let lado3;
lado1 = 60;
lado2 = -60;
lado3 = 60;


if (lado1 + lado2 + lado3 === 180) {
    console.log(true)
} else if (lado1 < 0 | lado2 < 0 | lado3 < 0) {
    console.log("Ângulo inválido")
} else {
    console.log(false)
}

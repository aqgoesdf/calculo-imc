//Desenvolvimento Web AqGoes
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('result');

    //Validação dos campos
    if /*SE*/(nome !== '' /*Diferente de vazio*/ && /*E*/ altura !== '' && peso !== ''){

      //FAzendo o calculo dos valores digitados
      const valorIMC = (peso / (altura * altura)).toFixed(2); //fixando o valor;

      let classicacao = '';
      if(valorIMC < 18.5){
        classicacao = "Abaixo do peso";

      } else if( valorIMC < 25){
        classicacao = "Peso ideial";
      } else if(valorIMC < 30){
        classicacao = "levimente acima do peso";
      } else if (valorIMC < 35 ){
        classicacao = "Obecidade grau I";
      }else if(valorIMC < 40){
        classicacao = "Obecidade grau II";
      }else{
        classicacao = "Obesidade mórbida"
      }


      result.textContent = `${nome} seu IMC é ${valorIMC} ${classicacao} ` ;
    } else /*Se não */{
        
    }
}


calcular.addEventListener('click', imc);

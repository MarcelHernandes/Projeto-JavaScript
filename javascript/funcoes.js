function somar(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Ralizar o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do método somar

function subtrair(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Ralizar o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do método Subtrair

function dividir(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Ralizar o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por zero!";
    }else{
        res = num1 / num2;
    }
    document.getElementById("resultado").innerHTML = res;
}//Fim do método Dividir

function multiplicar(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Ralizar o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do método Multiplicar

function tabuada(){
    var num1;
    var num2;
    //Coletar os números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    var resnum1 = "Tabuada do " + num1;
    var resnum2 = "Tabuada do " + num2;

    for(i=0; i <= 10; i++){
        resnum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resnum2 += "\n" + num2 + " * " + i + " = " + (num2 * i)
    }
    document.getElementById("resultado").innerHTML = "\n" + resnum1 + "\n" + resnum2;   
}//Fim da Tabuada

function raiz(){
    var num1;
    var num;
    var res;
    //Coletar os números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    resnum1 = Math.sqrt(num1)//Calcula a Raiz
    resnum2 = Math.sqrt(num2) 
    document.getElementById("resultado").innerHTML = "\n" + resnum1 + "\n" + resnum2;  
}//Fim da aiz

function potencia(){
    var num1;
    var num2;
    var res;
    //Coletar os números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    
    res = Math.pow(num1,num2)//Calcula a potencia 
    document.getElementById("resultado").innerHTML = res;
}//Fim da Potencia
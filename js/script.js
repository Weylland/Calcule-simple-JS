// Regexp
var reg = /^[0-9.]*$/g;
//Addition
var bouttonAdd = document.getElementById('add');
bouttonAdd.addEventListener('click', additionner);

function additionner(){
    var nb1 = document.getElementById('nb1').value;
    var nb2 = document.getElementById('nb2').value;
    var spAdd = document.getElementById('repAdd');

    if( nb1 == '' || nb2 == '' ){
        spAdd.innerHTML = 'Entrez des chiffres !';
    }
    else if (!reg.test(nb1) && !reg.test(nb2)){
        spAdd.innerHTML = 'Entrez des chiffres !';
    }
    else{
        var resultAdd = parseFloat(nb1) + parseFloat(nb2);
        spAdd.innerHTML = nb1 + ' + ' + nb2 + ' = ' + resultAdd;
    }
    document.getElementById('nb1').value = "";
    document.getElementById('nb2').value = "";
}

//Soustraction
var bouttonSous = document.getElementById('sous');
bouttonSous.addEventListener('click', soustraire);

function soustraire(){
    var nb3 = document.getElementById('nb3').value;
    var nb4 = document.getElementById('nb4').value;
    var spSous = document.getElementById('repSous');


    if( nb3 == '' || nb4 == ''){
        spSous.innerHTML = 'Entrez des chiffres !';
    }
    else{
        var resultSous = parseFloat(nb3) - parseFloat(nb4);
        spSous.innerHTML = nb3 + ' - ' + nb4 + ' = ' + resultSous;
    }
    document.getElementById('nb3').value = "";
    document.getElementById('nb4').value = "";
}

//Multiplication
var bouttonMult = document.getElementById('Mult');
bouttonMult.addEventListener('click', multiplier);

function multiplier(){
    var nb5 = document.getElementById('nb5').value;
    var nb6 = document.getElementById('nb6').value;
    var spMult = document.getElementById('repMult');


    if( nb5 == '' || nb6 == ''){
        spMult.innerHTML = 'Entrez des chiffres !';
    }
    else{
        var resultMult = parseFloat(nb5) * parseFloat(nb6);
        spMult.innerHTML = nb5 + ' X ' + nb6 + ' = ' + resultMult;
    }
    document.getElementById('nb5').value = "";
    document.getElementById('nb6').value = "";
}

//Division
var bouttonDiv = document.getElementById('Div');
bouttonDiv.addEventListener('click', diviser);

function diviser(){
    var nb7 = document.getElementById('nb7').value;
    var nb8 = document.getElementById('nb8').value;
    var spDiv = document.getElementById('repDiv');


    if( nb7 == '' || nb8 == ''){
        spDiv.innerHTML = 'Entrez des chiffres !';
    }
    else{
        var resultDiv = parseFloat(nb7) / parseFloat(nb8);
        spDiv.innerHTML = nb7 + ' / ' + nb8 + ' = ' + resultDiv;
    }
    document.getElementById('nb7').value = "";
    document.getElementById('nb8').value = "";
}



const input = document.querySelector('#input');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const total = document.querySelector('.buttotal');
const c = document.querySelector('.C');
const ce = document.querySelector('.CE');
const bs = document.querySelector('.backspace');
const minplus = document.querySelector('.minplus');
const sqrt = document.querySelector('.sqrt');
const del = document.querySelector('.Del');
const proiz = document.querySelector('.Proiz');
const proc = document.querySelector('.Proc');
const point = document.querySelector('.point');
const del1x = document.querySelector('.del1_x');
const dF = document.querySelector('#duplicateField');
const dF2 = document.querySelector('#duplicateField2');

var str = '';
var strmem = '';
var strmem2 = '';
var s = '';
var rez = '';
var num = 0;
var mem = 0;

function addOne() {
    str = str + '1'
    document.getElementById("input").value = str;
    strmem = strmem + '1';
    document.getElementById("duplicateField").value = strmem;

}


function addTwo() {
    str = str + '2'
    document.getElementById("input").value = str;
    strmem = strmem + '2';
    document.getElementById("duplicateField").value = strmem;

}

function addThree() {
    str = str + '3'
    document.getElementById("input").value = str;
    strmem = strmem + '3';
    document.getElementById("duplicateField").value = strmem;

}

function addFour() {
    str = str + '4'
    document.getElementById("input").value = str;
    strmem = strmem + '4';
    document.getElementById("duplicateField").value = strmem;

}


function addFive() {
    str = str + '5'
    document.getElementById("input").value = str;
    strmem = strmem + '5';
    document.getElementById("duplicateField").value = strmem;

}

function addSix() {
    str = str + '6'
    document.getElementById("input").value = str;
    strmem = strmem + '6';
    document.getElementById("duplicateField").value = strmem;

}

function addSeven() {
    str = str + '7'
    document.getElementById("input").value = str;
    strmem = strmem + '7';
    document.getElementById("duplicateField").value = strmem;

}

function addEight() {
    str = str + '8'
    document.getElementById("input").value = str;
    strmem = strmem + '8';
    document.getElementById("duplicateField").value = strmem;

}

function addNine() {
    str = str + '9'
    document.getElementById("input").value = str;
    strmem = strmem + '9';
    document.getElementById("duplicateField").value = strmem;

}

function addZero() {
    str = document.getElementById("input").value;
    if (str[0] != '0' && str[0] != ' ') {
        str = str + '0'
        document.getElementById("input").value = str;
        strmem = strmem + '0';
        document.getElementById("duplicateField").value = strmem;
    } else {
        str = '';
        strmem = '';
    }


}

function fplus() {
    strmem = strmem + ' + ';
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = strmem;
    str = '';

}

function fminus() {
    strmem = strmem + ' - ';
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = strmem;
    str = '';
}

function ftotal() {
    s = eval(duplicateField.value);
    strmem = strmem + ' = ' + s + '\n';
    rez = rez + strmem;
    document.getElementById("duplicateField").value = strmem;
    document.getElementById("input").value = "";
    document.getElementById("duplicateField2").value = rez;
    strmem = '';
    str = '';
}

function fc() {
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = '';
    document.getElementById("duplicateField2").value = '';
    strmem = '';
    str = '';
}

function fce() {
    document.getElementById("input").value = "";

    strmem = '';
    str = '';
}

function fbackspace() {
    str = document.getElementById("input").value;
    strmem = document.getElementById("duplicateField").value;
    if (str.length > 0) {
        str = str.substr(1);
        strmem = strmem.substr(1);
        document.getElementById("input").value = str;
        document.getElementById("duplicateField").value = strmem;
    } else {
        str = '';
        strmem = '';
    }
}

function fminplus() {
    str = document.getElementById("input").value;
    if (str[0] != '-') {
        str = '-' + str;
        strmem = '-' + strmem;
        document.getElementById("input").value = str;

    } else {
        str = str.substr(1);
        strmem = strmem.substr(1);
        document.getElementById("input").value = str;
    }
}

function fsqrt() {
    str = document.getElementById("input").value;
    num = parseInt(str);
    if (num > 0) {
        document.getElementById("duplicateField").value = 'sqrt' + strmem + ' = ' + String(Math.sqrt(num)) + '\n';
        rez = rez + document.getElementById("duplicateField").value + '\n';
        document.getElementById("duplicateField2").value = rez;
    } else if (num < 0) {
        num = Math.abs(num);
        document.getElementById("duplicateField").value = 'sqrt' + strmem + ' = ' + String(Math.sqrt(num)) + '\n';
        rez = rez + document.getElementById("duplicateField").value + '\n';
        document.getElementById("duplicateField2").value = rez;
    } else if (num == 0) {
        alert('Error')
    }

}

function fdel() {
    strmem = strmem + ' / ';
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = strmem;
    str = '';

}

function fproiz() {

    strmem = strmem + ' * ';
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = strmem;
    str = '';

}

function fproc() {
    s = (eval(duplicateField.value)) / 100;
    strmem = strmem + ' % ';
    document.getElementById("input").value = "";
    document.getElementById("duplicateField").value = strmem + '=' + s;
    rez = rez + document.getElementById("duplicateField").value + '\n';
    document.getElementById("duplicateField2").value = rez;
    strmem = '';
    str = '';
    s = '';
}

function fpoint() {
    str = document.getElementById("input").value;
    if (str == '') {
        str = strmem
    } else if (str.indexOf('.') == -1) {
        str = str + '.';
        strmem = strmem + '.';
    } else if (str.indexOf('.') !== -1) {
        str = str;
        strmem = strmem;
    }
}

function fdel1x() {
    str = document.getElementById("input").value;
    if (str != '') {
        s = eval(duplicateField.value);
        num = 1 / s;
        document.getElementById("input").value = "";
        document.getElementById("duplicateField").value = '(1/' + str + ')' + '=' + String(num);
        rez = rez + document.getElementById("duplicateField").value + '\n';
        document.getElementById("duplicateField2").value = rez;
        strmem = '';
        str = '';
        s = '';
    }

}

one.addEventListener('click', addOne);
two.addEventListener('click', addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eight.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
zero.addEventListener('click', addZero);
plus.addEventListener('click', fplus);
minus.addEventListener('click', fminus);
total.addEventListener('click', ftotal);
c.addEventListener('click', fc);
ce.addEventListener('click', fce);
bs.addEventListener('click', fbackspace);
minplus.addEventListener('click', fminplus);
sqrt.addEventListener('click', fsqrt);
del.addEventListener('click', fdel);
proiz.addEventListener('click', fproiz);
proc.addEventListener('click', fproc);
point.addEventListener('click', fpoint);
del1x.addEventListener('click', fdel1x);
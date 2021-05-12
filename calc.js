let calc = document.createElement('div');
calc.className= "container"
calc.id = "container";

document.body.appendChild(calc);

let otpt = document.createElement('div');
otpt.className = "outp";
let container1 = document.getElementById('container');
container1.appendChild(otpt);

let displ  = document.createElement('input');
displ.id = "outp"

otpt.appendChild(displ);

let butt = document.createElement('div')
butt.className = 'btn'
container1.appendChild(butt);


let row1 = document.createElement('div')
row1.className = "row1";
butt.appendChild(row1);

var btn1 = document.createElement('li');
btn1.id = "btn1";
row1.appendChild(btn1)

var bt1 = document.createElement('input');
bt1.type = 'button';
bt1.value = 'C';
bt1.name = "cln";
bt1.onclick = clean;
btn1.appendChild(bt1);

var btn2 = document.createElement('li');
btn2.id = "btn2";
row1.appendChild(btn2)

var bt2 = document.createElement('input');
bt2.type = 'button';
bt2.value = '/';
bt2.name = "";
bt2.setAttribute("onclick","enter(this.value)");
btn2.appendChild(bt2);

var btn3 = document.createElement('li');
btn3.id = "btn3";
row1.appendChild(btn3)

var bt3 = document.createElement('input');
bt3.type = 'button';
bt3.value = '*';
bt3.name = "";
bt3.setAttribute("onclick","enter(this.value)");
btn3.appendChild(bt3);

var btn25 = document.createElement('li');
btn25.id = "btn25";
row1.appendChild(btn25)

var bt25 = document.createElement('input');
bt25.type = 'button';
bt25.value = '%';
bt25.name = "";
bt25.setAttribute("onclick","enter(this.value)");
btn25.appendChild(bt25);

let row2 = document.createElement('div')
row2.className = "row2";
butt.appendChild(row2);

var btn4 = document.createElement('li');
btn4.id = "btn4";
row2.appendChild(btn4)

var bt4 = document.createElement('input');
bt4.type = 'button';
bt4.value = '7';
bt4.name = "";
bt4.setAttribute("onclick","enter(this.value)");
btn4.appendChild(bt4);

var btn5 = document.createElement('li');
btn5.id = "btn5";
row2.appendChild(btn5)

var bt5 = document.createElement('input');
bt5.type = 'button';
bt5.value = '8';
bt5.name = "";
bt5.setAttribute("onclick","enter(this.value)");
btn5.appendChild(bt5);

var btn6 = document.createElement('li');
btn6.id = "btn6";
row2.appendChild(btn6)

var bt6 = document.createElement('input');
bt6.type = 'button';
bt6.value = '9';
bt6.name = "";
bt6.setAttribute("onclick","enter(this.value)");
btn6.appendChild(bt6);

var btn7 = document.createElement('li');
 btn7.id = "btn7";
 row2.appendChild(btn7)
 
 var bt7 = document.createElement('input');
 bt7.type = 'button';
 bt7.value = '-';
 bt7.name = "";
 bt7.setAttribute("onclick","enter(this.value)");
 btn7.appendChild(bt7);

let row3 = document.createElement('div')
row3.className = "row3";
butt.appendChild(row3);

var btn8 = document.createElement('li');
btn8.id = "btn7";
row3.appendChild(btn8)

var bt8 = document.createElement('input');
bt8.type = 'button';
bt8.value = '4';
bt8.name = "";
bt8.setAttribute("onclick","enter(this.value)");
btn8.appendChild(bt8);

var btn9 = document.createElement('li');
btn9.id = "btn9";
row3.appendChild(btn9)

var bt9 = document.createElement('input');
bt9.type = 'button';
bt9.value = '5';
bt9.name = "";
bt9.setAttribute("onclick","enter(this.value)");
btn9.appendChild(bt9);

var btn10 = document.createElement('li');
btn10.id = "btn10";
row3.appendChild(btn10)

var bt10 = document.createElement('input');
bt10.type = 'button';
bt10.value = '6';
bt10.name = "";
bt10.setAttribute("onclick","enter(this.value)");
btn10.appendChild(bt10);

var btn11 = document.createElement('li');
btn11.id = "btn11";
row3.appendChild(btn11)

var bt11 = document.createElement('input');
bt11.type = 'button';
bt11.value = '+';
bt11.name = "add";
bt11.setAttribute("onclick","enter(this.value)");
btn11.appendChild(bt11);

let row4 = document.createElement('div')
row4.className = "row4";
butt.appendChild(row4);

var btn12 = document.createElement('li');
btn12.id = "btn12";
row4.appendChild(btn12)

var bt12 = document.createElement('input');
bt12.type = 'button';
bt12.value = '1';
bt12.name = "";
bt12.setAttribute("onclick","enter(this.value)");
btn12.appendChild(bt12);

var btn13 = document.createElement('li');
btn13.id = "btn13";
row4.appendChild(btn13)

var bt13 = document.createElement('input');
bt13.type = 'button';
bt13.value = '2';
bt13.name = "";
bt13.setAttribute("onclick","enter(this.value)");
btn13.appendChild(bt13);

var btn14 = document.createElement('li');
btn14.id = "btn14";
row4.appendChild(btn14)

var bt14 = document.createElement('input');
bt14.type = 'button';
bt14.value = '3';
bt14.name = "";
bt14.setAttribute("onclick","enter(this.value)");
btn14.appendChild(bt14);

let row5 = document.createElement('div')
row5.className = "row5";
butt.appendChild(row5);

var btn15 = document.createElement('li');
btn15.id = "btn15";
row5.appendChild(btn15)

var bt15 = document.createElement('input');
bt15.type = 'button';
bt15.value = '0';
bt15.name = "zero";
bt15.setAttribute("onclick","enter(this.value)");
btn15.appendChild(bt15)

var btn16 = document.createElement('li');
btn16.id = "btn16";
row5.appendChild(btn16)

var bt16 = document.createElement('input');
bt16.type = 'button';
bt16.value = '00';
bt16.name = "";
bt16.setAttribute("onclick","enter(this.value)");
btn16.appendChild(bt16);

var btn17 = document.createElement('li');
btn17.id = "btn17";
row5.appendChild(btn17)

var bt17 = document.createElement('input');
bt17.type = 'button';
bt17.value = '.';
bt17.setAttribute("onclick","enter(this.value)")
btn17.appendChild(bt17);

var btn18 = document.createElement('li');
btn18.id = "btn18";
row5.appendChild(btn18)

var bt18 = document.createElement('input');
bt18.type = 'button';
bt18.value = '=';
bt18.name = "";
bt18.onclick = calculate;
btn18.appendChild(bt18);

document.body.appendChild(container1);

function enter(inputs){   
    document.getElementById('outp').value+=inputs;
}
function clean(){
    document.getElementById('outp').value = "";
}
function calculate(){
    var outp = document.getElementById('outp').value;   
    var result = eval(outp);
    document.getElementById('outp').value = result;
}
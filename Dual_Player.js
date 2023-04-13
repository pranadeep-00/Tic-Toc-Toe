let gameResult =document.getElementById("result");
key = 1;
function b1(){
    if (key == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a1").value = "O";
		document.getElementById("a1").disabled = true;
		key = 1;
	}
}
function b2(){
    if (key == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a2").value = "O";
		document.getElementById("a2").disabled = true;
		key = 1;
	}
}
function b3(){
    if (key == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a3").value = "O";
		document.getElementById("a3").disabled = true;
		key = 1;
	}
}
function b4(){
    if (key == 1) {
		document.getElementById("a4").value = "X";
		document.getElementById("a4").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a4").value = "O";
		document.getElementById("a4").disabled = true;
		key = 1;
	}
}
function b5(){
    if (key == 1) {
		document.getElementById("a5").value = "X";
		document.getElementById("a5").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a5").value = "O";
		document.getElementById("a5").disabled = true;
		key = 1;
	}
}
function b6(){
    if (key == 1) {
		document.getElementById("a6").value = "X";
		document.getElementById("a6").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a6").value = "O";
		document.getElementById("a6").disabled = true;
		key = 1;
	}
}
function b7(){
    if (key == 1) {
		document.getElementById("a7").value = "X";
		document.getElementById("a7").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a7").value = "O";
		document.getElementById("a7").disabled = true;
		key = 1;
	}
}
function b8(){
    if (key == 1) {
		document.getElementById("a8").value = "X";
		document.getElementById("a8").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a8").value = "O";
		document.getElementById("a8").disabled = true;
		key = 1;
	}
}
function b9(){
    if (key == 1) {
		document.getElementById("a9").value = "X";
		document.getElementById("a9").disabled = true;
		key = 0;
	}
	else {
		document.getElementById("a9").value = "O";
		document.getElementById("a9").disabled = true;
		key = 1;
	}
}
function myFun(){
    let b1=document.getElementById("a1").value;
    let b2=document.getElementById("a2").value;
    let b3=document.getElementById("a3").value;
    let b4=document.getElementById("a4").value;
    let b5=document.getElementById("a5").value;
    let b6=document.getElementById("a6").value;
    let b7=document.getElementById("a7").value;
    let b8=document.getElementById("a8").value;
    let b9=document.getElementById("a9").value;

    if(b1==='X' && b2==='X' && b3==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b1==='X' && b4==='X' && b7==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b3==='X' && b6==='X' && b9==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b7==='X' && b8==='X' && b9==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b1==='X' && b5==='X' && b9==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b3==='X' && b5==='X' && b7==='X'){
        gameResult.textContent= "X Player Wins";
    }
    else if(b2==='X' && b5==='X' && b8==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b4==='X' && b5==='X' && b6==='X'){
        gameResult.textContent= "X Player Won";
    }
    else if(b1==='O' && b2==='O' && b3==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b1==='O' && b4==='O' && b7==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b7==='O' && b8==='O' && b9==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b3==='O' && b6==='O' && b9==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b1==='O' && b5==='O' && b9==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b3==='O' && b7==='O' && b7==='O'){
        gameResult.textContent= "O Player Wins";
    }
    else if(b2==='O' && b5==='O' && b8==='O'){
        gameResult.textContent= "O Player Won";
    }
    else if(b4==='O' && b5==='O' && b6==='O'){
        gameResult.textContent= "O Player Won";
    }
}
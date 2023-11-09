console.log('this is seperate file')

//option 1 diretly set element
//<button onclick="document.body.style.backgroundColor = 'Yellow'">Make Yellow</button>
//option 2: add onclick function
//<button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3 another:
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'purple';
}

//option 4:

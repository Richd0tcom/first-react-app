const swtch = document.getElementById('switch');
const board = document.getElementById('board');
const code = document.getElementById('code');
const list = document.getElementById('list');
const clearBtn = document.getElementById('clear');

const txts = document.querySelectorAll('.color-txt');

swtch.addEventListener('click', change);


let previousColors = JSON.parse(localStorage.getItem('colorsList')) || ['#ff3362'] ;

board.style.backgroundColor = previousColors[0] || '#ff3362';
code.textContent = previousColors[0] || '#ff3362';



function populate(formers) {

    list.innerHTML = formers.map(color=>{
        return `<h1 class="text-center py-3 color-txt">${color}</h1>`;
    }).join('');
    
}

clearBtn.addEventListener('click', ()=>{

    let temp = previousColors[0];
    previousColors = [temp];
    localStorage.setItem('colorsList',JSON.stringify(previousColors));
    list.innerHTML = null;

});

function change(e){
    let currentColor = `#${(Math.random() * 0xfffff * 100000).toString(16).slice(0,6)}`;

    board.style.backgroundColor = currentColor;
    code.textContent = currentColor;

    populate(previousColors);
    
    previousColors.unshift(currentColor);
    previousColors.splice(5);
    localStorage.setItem('colorsList',JSON.stringify(previousColors));
    
}


if(previousColors.length > 1){
    populate(previousColors.slice(1,));
}





const gridContainer = document.querySelector('.gridContainer');
//color randomizer
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

//create a 16x16 grid
function createGrid(){
    for (let i = 0; i<16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', `border:0.25px solid grey; display:flex; align-content:stretch; flex:1;`);

        for (let j =0;j<16; j++){
            const column = document.createElement('div');
            column.classList.add('col');
            column.setAttribute('style', `border:0.25px solid grey; flex: 1;`);
            row.appendChild(column);
        }
        gridContainer.appendChild(row);
    }
}

createGrid();

const cell = document.querySelectorAll('.col');

cell.forEach(cell =>{
    cell.classList.add('.hover');
    // console.log(cell)
})

cell.forEach(cell =>{
    cell.addEventListener('mouseover', (e)=>{
        e.target.classList.add('hover');
        e.target.style.backgroundColor = randomColor();
        console.log(e);
    })
})

const reset = document.querySelector('.reset')
reset.addEventListener('click', (e)=>{
    window.location.reload();
})

const newGrid = document.querySelector('.newGrid');
//Event for creating a custom grid
newGrid.addEventListener('click', (e) =>{
    let input = prompt('Enter a grid number');

    if (isNaN(Number(input)) || Number(input > 100)){
        alert('Please enter a valid value');
    }else if(!isNaN(Number(input))&&Number(input)>0 && Number(input)<=100){
        function clear(){
            gridContainer.textContent = '';
        }
    }
    clear();
    function createNewGrid(input){
        for (let i = 0; i<input; i++){
            const row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('style', `border:0.25px solid grey; display:flex; align-content:stretch; flex:1;`);
            document.querySelector('.gridContainer').setAttribute('style', 'width: 800px; height: 800px;');
            for (let j =0;j<input; j++){
                const column = document.createElement('div');
                column.classList.add('col');
                column.setAttribute('style', 'border:0.25px solid grey; flex: 1;');
                row.appendChild(column);
            }
            gridContainer.appendChild(row);
        }
    }
    createNewGrid(input);
    const cell = document.querySelectorAll('.col');

    cell.forEach(cell =>{
        cell.classList.add('.hover');
    })

    cell.forEach(cell =>{
        cell.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = randomColor();
            console.log(e);
        })
    })
})
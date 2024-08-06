


const makeGrid = (size) => {

    size = size * size;

    for(let i = 0; i < size; i++){
    nDiv = document.createElement('div');
    nDiv.className = 'gridCell-' + i;
    nDiv.style.display = 'flex';
    nDiv.style.flex = '1 1 25px'
    nDiv.style.height = '25px'
    nDiv.style.width = '25px'


    document.getElementById('container').appendChild(nDiv);
    //document.getElementsByClassName('gridCell-' + i);
    
    }
    

}

const getView = (size) =>{

   let container =  document.getElementById('container');
   let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
   let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

   let total_size = size * 25;
   let width = total_size / 2;
   
   container.style.width = `${ total_size  }px`;
   container.style.height = `${total_size}px`;

}

let Uinput = 16; 

getView(Uinput);

makeGrid(Uinput);

window.addEventListener("resize", getView);
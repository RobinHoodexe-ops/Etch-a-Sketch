
const getUinput = () => {
   let  value = document.getElementById('value');
   let  slider = document.getElementById('slider');

   value.textContent = slider.value;
  
   return slider.value;
   
}

const makeGrid = (size) => {


    let container = document.getElementById('container');

    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    size = size * size;

    

    for(let i = 0; i < size; i++){
    nDiv = document.createElement('div');
    nDiv.className = 'gridCell-' + i;
    nDiv.style.display = 'flex';
    nDiv.style.flex = '1 1 25px'
    nDiv.style.height = '25px'
    nDiv.style.width = '25px'
    nDiv.style.outline = '1px solid black'

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



let Uinput = getUinput();


getView(Uinput);

makeGrid(Uinput);

window.addEventListener("resize", getView(Uinput));


document.getElementById('slider').addEventListener("input", (e) => {
    let newSize = e.target.value;
    document.getElementById('value').textContent = newSize;

    getView(newSize);
    makeGrid(newSize);
})
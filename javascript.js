

const makeGrid = (size) => {
    for(let i = 0; i < size; i++){
    nDiv = document.createElement('div')
    nDiv.className = 'gridCell-' + i;
    nDiv.style.Color = "black";
    document.getElementById('container').appendChild(nDiv);
    //document.getElementsByClassName('gridCell-' + i);
    
    }
    let temp = document.querySelectorAll("gridCell-1");
// Apply CSS property to it
for (let i = 0; i < temp.length; i++) {
  temp[i].style.color = "white";
  temp[i].style.backgroundColor = "black";
}
}

makeGrid(16);
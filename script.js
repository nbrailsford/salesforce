//revenue in millions
let heightArray = [0,5,22,51,100,176,310,497,749,1000,1300,1600.2270,3000,4000,5000,6660,8400,10548,13300,17000,0]

//create smaller array
function downsize(num){
    return num*.05;
}
let smallHeight = heightArray.map(downsize)

//Crate an array of element ids
let graphArray = [];
for (let i = 1; i < 21; i++){
    graphArray.push(i.toString());
}

//add graph height to each element
let i = 0;
let timer = setInterval(addHeight, 200)
function addHeight(){
        document.getElementById(graphArray[i]).style.height = smallHeight[i].toString() + 'px'
        i++
    if(i>19){
        clearInterval(timer)
    }
}





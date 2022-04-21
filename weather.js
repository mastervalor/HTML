function remove(){
    document.getElementById('accept').remove()
}
function change(element){
    if (element.value == '°C'){
        for(i=1; i<=8; i++){
            var temp = document.getElementById('temp' + i);
            var number = parseInt(temp.innerText);
            temp.innerText = Math.round(5 / 9 * (number - 32)) + '°';
        }
    }
    if (element.value == '°F'){
        for(i=1; i<=8; i++){
            var temp = document.getElementById('temp' + i);
            var number = parseInt(temp.innerText);
            temp.innerText = Math.round(9 / 5 * number + 32) + '°';
        }
    }
}
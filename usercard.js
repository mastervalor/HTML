function change(){
    var name = document.getElementById('name')
    name.innerText = "Adam Long"
}

function add(){
    var request = document.getElementById('request')
    var number = document.getElementById('number')
    var total = document.getElementById('total')
    request.remove()
    number.innerText = parseInt(number.innerText) - 1
    total.innerText = parseInt(total.innerText) + 1
}
function remove(){
    var request = document.getElementById('request')
    var number = document.getElementById('number')
    request.remove()
    number.innerText = parseInt(number.innerText) - 1
}
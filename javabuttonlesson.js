function changeColor(){
    p_tag = document.querySelector('p')
    console.log(p_tag)
    p_tag.style.backgroundColor = "red"
}

function dissapear(){
    var p_tag = document.getElementById("gone")
    p_tag.remove()
}

function increase(){
    var p_tag = document.getElementsByClassName("numbers")
    for(var i =0; i< p_tag.length; i++){
        p_tag[i].innerText = parseInt(p_tag[i].innerText) + 1
    }
}

function decrease(){
    var p_tag = document.getElementsByClassName("numbers")
    for(var i =0; i< p_tag.length; i++){
        p_tag[i].innerText = parseInt(p_tag[i].innerText) - 1
    }
    // p_tag.innerText = parseInt(p_tag.innerText) - 1
}

function changeImage(element){
    if(element.getAttribute('src') == 'images/chicken.jpg'){
        element.setAttribute('src', 'images/steak.jpg')
    }
    else{
        element.setAttribute('src', 'images/chicken.jpg')
    }
}

function changeBack(){
    // document.getElementById('lastImage').setAttribute('src', 'images/steak.jpg')
    if(document.getElementById('lastImage').getAttribute('src') == 'images/chicken.jpg'){
        document.getElementById('lastImage').setAttribute('src', 'images/steak.jpg')
    }
    else{
        document.getElementById('lastImage').setAttribute('src', 'images/chicken.jpg')
    }
}

function nextImage(){
    if(document.getElementById('lastImage').getAttribute('src') == 'images/chicken.jpg'){
        document.getElementById('lastImage').setAttribute('src', 'images/steak.jpg')
    }
    else{
        document.getElementById('lastImage').setAttribute('src', 'images/chicken.jpg')
    }
}
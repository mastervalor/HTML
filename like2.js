var like = [9, 12, 9];

function add(i){
    tag = document.getElementById("likes" + i)
    like[i]++;
    tag.innerText = like[i] + " like(s)";
}
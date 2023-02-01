let count = 0;
document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML= count;
}

window.onscroll = function() {myFunction()};;
function myFuction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.document.clientHeight;
    var scrolled = (winScroll / Height) *
}

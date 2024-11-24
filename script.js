var  start = new Date().getTime();     
function GenarateRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]; 
    } 
    return color;          
}
function shapeAppeare(){
    var top = Math.random()*500;
    var left = Math.random()*400;

    var width = Math.random()*400;
    var height = Math.random()*400;

    if (Math.random()>0.5){
        document.getElementById("shape").style.borderRadius="50%";
    }
    else{
        document.getElementById("shape").style.borderRadius="0%";
    }
    document.getElementById("shape").style.width=width + "px";
    document.getElementById("shape").style.height=height + "px";
    document.getElementById("shape").style.backgroundColor=GenarateRandomColor();

    document.getElementById("shape").style.top=top + "px";
    document.getElementById("shape").style.left=left + "px";
    document.getElementById("shape").style.display="block";
    start = new Date().getTime();
}
function shapeAppeareDelay(){
    setTimeout(shapeAppeare,Math.random()*1500);
}       
shapeAppeareDelay();
document.getElementById("shape").onclick=function(){
    document.getElementById("shape").style.display="none";

    var end = new Date().getTime();
    var time = (end - start)/1000;
    document.getElementById("CountTime").innerHTML=time + "s";
    shapeAppeareDelay();

    var min;
    if (min>=time){
        min = time;
    }
    
    document.getElementById("minTime").innerHTML=min;
}
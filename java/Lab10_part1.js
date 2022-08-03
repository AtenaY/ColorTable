

var fontColorArray = ["red" , "blue" , "green"];
var bgColorArray = ["white" , "red" , "green" , "blue"];

var curFontColor=1;
var curBgColor=1;

function changeColor(){
    
    if(document.getElementsByName("color")[0].checked){
        curFontColor=0
        changeFontColor();
    } else if (document.getElementsByName("color")[1].checked){
        curFontColor=1
        changeFontColor(); 
    } else if (document.getElementsByName("color")[2].checked){
        curFontColor=2
        changeFontColor(); 
    }

}


function changeFontColor(){
    var text = document.getElementById("text");
    text.style.color=fontColorArray[curFontColor]
}


function changeBgColor(){
    var td_text = document.getElementById("td_text");
    td_text.style.backgroundColor=bgColorArray[curBgColor]
}


function changeBg(){
    if (document.getElementsByTagName("option")[0].selected){
        curBgColor=0;
        changeBgColor();
    }else if (document.getElementsByTagName("option")[1].selected){
        curBgColor=1;
        changeBgColor();
    }else if (document.getElementsByTagName("option")[2].selected){
        curBgColor=2;
        changeBgColor();
    }else if (document.getElementsByTagName("option")[3].selected){
        curBgColor=3;
        changeBgColor();
    }
    

}

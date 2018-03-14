var isBoxOpen = false;

function viewMore(){
    var portfolio = document.getElementById("portfolioSection");
portfolio.classList.toggle("portfolioMore");

var downArrow = '<i class="fa fa-angle-down"></i>';
var upArrow = '<i class="fa fa-angle-up"></i>'
    if(isBoxOpen == true){
        isBoxOpen = false;
    } else{
        isBoxOpen = true;
    }
    

    if (isBoxOpen == true){
        document.getElementById("viewMoreButton").innerHTML = "View Less " + upArrow;
        
    } else {
        document.getElementById("viewMoreButton").innerHTML = "View More " + downArrow;
    }
        
}


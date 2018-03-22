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



function sendMessage(){
    
    var messageSent = document.getElementById('messageSent');
    var form = document.getElementById('contactForm');
    console.log('Message Sent');
    messageSent.style.display= "block";
    form.reset;

        
}


    
        



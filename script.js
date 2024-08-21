var i = 1;                  

function myLoop() {        
  setTimeout(function() {   
    $(".red").toggleClass("rednew");
    $(".yellow").toggleClass("yellownew"); 
    $(".green").toggleClass("greennew");    
    i;                    
    if (i < 10) {         
      myLoop();            
    }                      
  }, 150)
}

myLoop(); 


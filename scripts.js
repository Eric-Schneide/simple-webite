$(document).ready(function(){
    $(".openButton").click(function(){
        $(".bodytext").slideDown();
        console.log("Running dropbutton open")
    });
    $(".closeButton").click(function(){
        $(".bodytext").slideUp();
        console.log("Running dropbutton close")
    });  
  });

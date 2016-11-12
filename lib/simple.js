 $(document).ready(function(){
     $("button").click(function(){
         $(".test").hide();
         $(".a",".a1").hide();  
        console.log("Hi");              
     });

     $("#but").click(function(){
         $(".test").show().css("background-color", "yellow");;
         console.log("Hello");
     });
});


// $(document).ready(function(){
//     $("button").click(function(){
//         $(".test").hide();
//     });
// });


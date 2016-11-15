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


var obj={"name":"bijay","age":30};
console.log(obj);
var obj1 =obj;
obj1.name ="arun";
var obj2 = jQuery.extend({},obj);
obj2.name ="kumar";
console.log(obj);
console.log(obj1);
console.log(obj2);


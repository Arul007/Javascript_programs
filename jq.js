var obj={"name":"bjay","age":30}
var obj1 =obj;
obj.name ="arun";
var obj2 = jQuery.extend({},obj);
obj2.name ="kumar";
console.log(obj);
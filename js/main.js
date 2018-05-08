$(document).ready(function(){
  console.log("JS ready");

  var var1= "Paso a segundo";
  var var2= "Paso a segundo";
  if(var1 == var2){
    console.log("Paso");
  }else{
    console.log("No paso");
  }


  var coches = ["Ford", "Audi", "Fiat", "BMW", "Citroen"];
  for (var i = 0; i < coches.length; i++) {
    console.log(coches[i]);
  }
});

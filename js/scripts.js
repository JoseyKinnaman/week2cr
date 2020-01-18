$(document).ready(function() {
  $("form#tech").submit(function(event){
  
  var career = $("select#pro").val();
  var internet = $("select#inter").val();
  var hate = $("select#hate").val();
  var prefer = $("select#prefer").val();

 if (career === "no" && hate === "yes") {
    $("#java").show();
 }

 if (hate === "no" && prefer === "MS") {
   $("#csharp").show();
 }
   
 if (hate === "no" && prefer === "EF"){
   $("#Ruby").show();
 } else if (internet=== "WiFi"){
   $("#Java").show();
 }

event.preventDefault();
  });
});

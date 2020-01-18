$(document).ready(function() {
  $("form#tech").submit(function(event){
  
  var career = $("select#pro").val();
  var internet = $("select#inter").val();
  var hate = $("select#hate").val();
  var prefer = $("select#pref").val();

 if (career === "no" && hate === "yes") {
    $("#Java").show();
 }

 if (hate === "no" && prefer === "MS") {
   $("#Csharp").show();
 }
   
 if (hate === "no" && prefer === "EF") {
   $("#Ruby").show();
 } else if (internet=== "DU"){
   $("#Java").show();
 }

event.preventDefault();
  });
});

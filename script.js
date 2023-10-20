function myFunction() {
    document.getElementById("dropdown-content").style.display = "block";
  }
  function closeFunction() {
    document.getElementById("dropdown-content").style.display = "none";
  }
  $(".btn").on("click",function(){ 
    $('.menu').toggleClass("show");

});
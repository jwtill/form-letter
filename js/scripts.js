$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();

    $(".greeting").text(nameInput);
    event.preventDefault();
  
  });
});
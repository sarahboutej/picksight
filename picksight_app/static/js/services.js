function validateMessageStep() {
  var selectedVal = $('#message_select').find(":selected").val();
  var message = $('#message_select').find(":selected").text();
  if (selectedVal != 'default') {
    $.ajax({
      url:"http://127.0.0.1:8000/static/data/validation.json",
      type:"POST",
      data:{
        message: message,
      },
      success:function(response) {
        $("#arrowL").removeAttr("style");
        $("#arrowR").removeAttr("style");
        $("#step2").addClass( "flex" );
        $("#step2").removeClass( "hidden" );
      },
      error:function(){
        console.warn("Error when sending message to the server");
      },
    });
  } else {
    showSnackBar();
  }
};

function validateStep1() {
  $.ajax({
    url: 'http://127.0.0.1:8000/static/data/validation.json', 
    type:"GET",
    success: function(data) {
      $("#step1").addClass( "flex" );
      $("#step1").removeClass( "hidden" );
      $("#phone-number").text( data.phone );
    },
    error: function() {
      setTimeout(worker, 5000);
    }
  });
};

function showSnackBar(){
  $("#snackbar").text( "Please select a message!" );
  $("#snackbar").addClass( "show" );
  setTimeout(function(){ 
    $("#snackbar").removeClass( "show" );
  }, 3000);
}
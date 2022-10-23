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
        $("#moved-arrow-left").removeAttr("style");
        $("#moved-arrow-right").removeAttr("style");
        $("#moved-arrow-down").removeAttr("style");
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

function validateStep1(isValidated) {
  $.ajax({
    url: 'http://127.0.0.1:8000/static/data/validation.json', 
    type:"GET",
    success: function(data) {
      if(isValidated) {
        $("#step1").addClass( "flex" );
        $("#step1").removeClass( "hidden" );
        $("#phone-number").text( data.phone );
      }
    },
    error:function(){
      console.warn("Error when sending message to the server");
    },
  });
};

function showSnackBar() {
  $("#snackbar").text( "Please select a message!" );
  $("#snackbar").addClass( "show" );
  setTimeout(function(){ 
    $("#snackbar").removeClass( "show" );
  }, 3000);
};

var verificationTimeInterval;

function sendVerificationMessageRequest(isValidated){
  $.ajax({
    url: 'http://127.0.0.1:8000/static/data/validation.json', 
    type:"GET",
    success: function(data){
      if(isValidated) {
        setTimeout(() => {
          $("#step1").addClass( "flex" );
          $("#step1").removeClass( "hidden" );
          $("#phone-number").text( data.phone );
          $("#step2Blured").removeClass( "flex" );
          $("#step2Blured").addClass( "hidden" );
        },2000);
      } 
    },
  });
 }
 
 $(document).ready(function(){
  verificationTimeInterval =  setInterval(sendVerificationMessageRequest,2000);
 });

 function requestValidationStep1() {
  sendVerificationMessageRequest(true);
  clearInterval(verificationTimeInterval);
}; 


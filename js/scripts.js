$(document).ready(function () {
  $("#blanks").submit(function(event) {
    var blanks = ["firstItem", "favJuice", "favMeat", "anyThingElse"];
    var userInputArr = [];
    userInputArr.push(userInput.toUpperCase());
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

      
    });

    userInputArr.sort();

    // blanks.toUpperCase(function() {


      // blanksArray = blanksArray.map(function(input) {
        //   return input.toUpperCase()
        // });
        //
        // toUpper = function(input){
          //   return input.toUpperCase();
          // };
          // blanksArray = blanksArray.map(toUpper);

          // $(".firstItem").text(firstItemInput);
          // $(".favJuice").text(favJuiceInput);
          // $(".favMeat").text(favMeatInput);
          // $(".anyThingElse").text(anyThingElse);

          $("#receipt").show();
          // $("#blanks").hide();

          console.log();
          event.preventDefault();
        });


      });

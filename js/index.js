$(document).ready(function(){
    console.log("LETS GO!!");

    $('#submit-btn').click(convertTemp);

    function convertTemp(){
        event.preventDefault();
        $('body').removeClass();
        //Get user input
        var temp = $('#fahrenheitTemp').val();

        temp = parseInt(temp);


        var cel = ((temp - 32) * (5/9))
        cel = cel.toFixed(2);
         console.log(temp);
         console.log(cel);

        if (temp > 75){
            $('body').addClass('hot');
        }
        else if (temp < 75 && temp > 65){
            $('body').addClass('nice');
        }
        else {
            $('body').addClass('cold');
        }
        //reset entered values on page
         $('#fahrenheitTemp').val('');
         //Hide starting text
         $('#start').hide();
         //All this happens when submit is clicked
        $('#convert').html("Entered value" + " " + temp + " " + "converted into celsius is:" + " " + cel);
        }
 });
$(document).ready(function () {


    function calculateBMI() {
        var height = parseFloat($("#height").val());
        var weight = parseFloat($("#weight").val());
        // Formula: 703 x weight (lbs) / [height (in)]2
        var bmi = 703 * weight / (height * height)
        outputBMI(bmi);
    }

    function outputBMI(bmi) {
        bmi = bmi.toFixed(2)
        var message;
        if (bmi <= 15) {
            message = "Very severely underweight"
        } else if (bmi > 15 && bmi <= 16) {
            message = "Severely underweight"
        }  else if (bmi > 16 && bmi <= 18.5) {
            message = "Underweight"
        } else if (bmi > 18.5 && bmi <= 25) {
            message = "Normal (healthy weight)"
        } else if (bmi > 25 && bmi <= 30) {
            message = "Overweight"
        } else if (bmi > 30 && bmi <= 35) {
            message = "Obese Class I (Moderately obese)"
        } else if (bmi > 35 && bmi <= 40) {
            message = "Obese Class II (Severely obese)"
        } else {
            message = "Obese Class III (Very severely obese)"
        }
        $("#bmi").text(bmi);
        $("#bmi-message").text(message);
    }

    function validate() {
        var errorMessage = "MUST BE NUMERIC"
        var height = parseFloat($("#height").val());
        var weight = parseFloat($("#weight").val());

        var heightCheck = false;
        var weightCheck = false;

        if (typeof height === "number" && !isNaN(height)) {
            heightCheck = true;
            $("#height-error").text('');
        } else {
            $("#height-error").text(errorMessage);
        }
        if (typeof weight === "number" && !isNaN(weight)) {
            weightCheck = true;
            $("#weight-error").text('');

        } else {
            $("#weight-error").text(errorMessage);
        }

        return heightCheck && weightCheck;
    }
    $(document).on('keypress',function(e) {
        if(e.key === "Enter") {
            var pass = validate();
            if (pass) {
                calculateBMI();
            }
        }
    });

    $("#calculate").click(function (e) {
        e.preventDefault();
        var pass = validate();
        if (pass) {
            calculateBMI();
        }
    })

});
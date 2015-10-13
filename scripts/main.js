document.onreadystatechange = function() {

    document.getElementById('submit').onclick = function() {
        
        function validateForm(grossSalary) {

            var formValidation = document.getElementById('form-validaion-js');
            if (grossSalary == null || grossSalary == "") {
                formValidation.style.display = "block";
                formValidation.innerHTML = 'We need to known your gross salary';

                return false;
            } else {
                formValidation.style.display = "none";
            }
        }

        function submitForm() {

            var grossSalary = document.getElementById('gross_salary').value;
            // var options = {
            //     grossSalary: grossSalary,
            // }
            validateForm(grossSalary);

            var result = document.getElementById('results');

            // Check if the gross salary field is emputy
            
            var isThirtyPercent = document.getElementsByName('thirty_percent')[0].checked;

            var isThirtyPercent = document.getElementsByName('thirty_percent');
            var currentDomNode;

            var monthlySalary;
            var year = 12;

            var grossLittle = 19645;
            var grossMedium = 33363;
            var grossLarge = 55991;

            var thrityPercentRullingMonth;

            // Check to see if they user has 30% rulling
            if(isThirtyPercent) {
                thrityPercentRullingMonth = (grossSalary / year) * .25;
                console.log('user has 30%');
            } else if(grossSalary <= grossLittle) {
                console.log('taxed 37%');
                thrityPercentRullingMonth = (grossSalary / year) * .37;
            } else {
                console.log('taxed 42% - you earn a lot!');
                thrityPercentRullingMonth = (grossSalary / year) * .42;
            }

            monthlySalary = (grossSalary / year) - thrityPercentRullingMonth; 
            result.innerHTML = 'Your salary will be: <strong>&#8364;' + monthlySalary + '<strong>';
            
        }
        submitForm();
    }
}
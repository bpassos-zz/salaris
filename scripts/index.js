import calculate from './helpers/calculate';

export default new class Salaris {
  constructor() {
    this.prepare();
    this.bind();
  }

  prepare() {
    this.elements = {};
    this.elements.form = document.querySelector('[data-component="form"]');
    this.elements.result = document.querySelector('[data-component="result"]');
    this.elements.errorMessage = document.querySelector('[data-component="error-message"]');
  }

  bind() {
    this.elements.form.addEventListener('submit', ::this.onFormSubmit, true);
  }

  onFormSubmit(event) {
    event.preventDefault();
    let data = this.getData();

    console.log(calculate(data));
  }

  getData() {
    return {
      salary: this.getGrossSalary(),
      hasDiscount: this.isThirtyPercent()
    }
  }

  getGrossSalary() {
    return this.elements.form.querySelector('[data-component-child="gross-salary"]').value;
  }

  isThirtyPercent() {
    return this.elements.form.querySelector('[name="thirty_percent"]').checked;
  }

  renderResult(value) {
    this.elements.result.innerHTML = value;
  }

}

// NOTE: refactor into "modules"
// document.onreadystatechange = function() {
// 
//     document.getElementById('submit').onclick = function() {
// 
//         submitForm();
//     }
// 
//     function validateForm(grossSalary) {
// 
//         var formValidation = document.getElementById('form-validaion-js');
//         if (grossSalary == null || grossSalary == "") {
//             formValidation.style.display = "block";
//             formValidation.innerHTML = 'We need to known your gross salary';
// 
//             return false;
//         } else {
//             formValidation.style.display = "none";
//         }
//     }
// 
//     function submitForm() {
// 
//         var grossSalary = document.getElementById('gross_salary').value;
//         // var options = {
//         //     grossSalary: grossSalary,
//         // }
//         validateForm(grossSalary);
// 
//         var result = document.getElementById('results');
// 
//         // Check if the gross salary field is emputy
//         
//         var isThirtyPercent = document.getElementsByName('')[0].checked;
// 
//         var currentDomNode;
// 
//         var monthlySalary;
//         var year = 12;
// 
//         var grossLittle = 19645;
//         var grossMedium = 33363;
//         var grossLarge = 55991;
// 
//         var thrityPercentRullingMonth = calculate(grossSalary, isThirtyPercent);
// 
// 
//         // Check to see if they user has 30% rulling
//         // if(isThirtyPercent) {
//         //     thrityPercentRullingMonth = (grossSalary / year) * .25;
//         //     console.log('user has 30%');
//         // } else if(grossSalary <= grossLittle) {
//         //     console.log('taxed 37%');
//         //     thrityPercentRullingMonth = (grossSalary / year) * .37;
//         // } else {
//         //     console.log('taxed 42% - you earn a lot!');
//         //     thrityPercentRullingMonth = (grossSalary / year) * .42;
//         // }
// 
//         monthlySalary = (grossSalary / year) - thrityPercentRullingMonth; 
//         result.innerHTML = 'Your salary will be: <strong>&#8364;' + monthlySalary + '<strong>';
//         
//     }
// 
//     document.onkeydown = function(){
//         if(window.event.keyCode == '13'){
//             console.log('enter!');
//             submitForm();
//         }
//     }
// } 

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
    let value = this.formatResult(calculate(data));

    this.renderResult(value);
    this.showResult();
  }

  formatResult(value) {
    return `€ ${value}`;
  }

  getData() {
    return {
      salary: this.getGrossSalary(),
      hasDiscount: this.isThirtyPercent()
    }
  }

  getGrossSalary() {
    return this.elements.form
      .querySelector('[data-component-child="gross-salary"]')
      .value;
  }

  isThirtyPercent() {
    return this
      .elements
      .form
      .querySelector('[name="thirty_percent"]')
      .checked;
  }

  renderResult(value) {
    this.elements.result
      .querySelector('[data-component-child="result__value"]')
      .innerHTML = value;
  }

  showResult() {
    this.elements.result.classList.remove('h-is-hidden');
  }

}


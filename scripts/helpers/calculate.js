const MONTHS = 12;
const GROSS_LITTLE = 19645;
const GROSS_MEDIUM = 33363;
const GROSS_LARGE = 55991;

export default function calculate(salary, discount) {
  if (discount) return (salary / MONTHS) * .25;
  if (salary <= GROSS_LITTLE) return (salary / MONTHS) * .37;

  return (salary / year) * .42;
}

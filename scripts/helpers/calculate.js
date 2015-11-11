export const MONTHS = 12;
const GROSS_LITTLE = 19645;
const GROSS_MEDIUM = 33363;
const GROSS_LARGE = 55991;

export default function calculate({ salary, hasDiscount }) {
  let partial = (salary / MONTHS);
  if (hasDiscount) return partial - partial * .25;
  if (salary <= GROSS_LITTLE) return partial - partial * .37;

  return  partial - ((salary / year) * .42);
}


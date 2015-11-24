const regex = /^([0-9])*\.([0-9].)*$/;

export default function validate(value) {
  return regex.test(value);
}

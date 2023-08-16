export function padNumber(number, length) {
    return String(number).padStart(length, '0');
  }
  
  export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
function format_with_substring(number) {
  let arr = String(number).split('.');
  let int = arr[0];
  let fraction = arr[1];
  let result = '';
  let count = 0;

  for (let i = int.length - 1; i >= 0; i--) {
    count++;
    result = `${int[i]}${result}`;

    if (count % 3 === 0 && i !== 0) {
      result = `,${result}`;
    }
  }

  return fraction ? `${result}.${fraction}` : result;
}
console.log(format_with_substring(12112123313.78));
console.log(format_with_substring(121121233));
console.log(format_with_substring(12112123313.0));

function printDivisors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
printDivisors(12); // misal üçün

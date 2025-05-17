

function printDivisors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
printDivisors(53

); 
printDivisors(35); 







function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}
console.log(countDivisors(35));
console.log(countDivisors(12));




function upperStr(str) {
  return str.toUpperCase();
}
console.log(upperStr("salam"));
console.log(upperStr("kamran babayev"));
console.log(upperStr("code academy"));



function power(base, exponent) {
  return Math.pow(base, exponent);
}
const a = Number(prompt("1-ci ədədi daxil edin:"));
const b = Number(prompt("2-ci ədədi daxil edin:"));
console.log(power(a, b));


function convert(str) {
  let result = '';
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(convert('KaMRaN BaBaYeV')); 
console.log(convert('cOdE AcAdEmy')); 





let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

shoppingCart = shoppingCart.filter(item => item !== 'Honey');

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) shoppingCart[teaIndex] = 'Green Tea';

console.log(shoppingCart);


const countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
];


console.log(countries.reverse());


const indexStart = countries.indexOf('Canada');
countries.splice(indexStart, 2, 'Azerbaijan');
console.log(countries);





const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.slice(0, 3));


console.log(itCompanies.slice(-3));


const mid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.length % 2 === 0 
  ? itCompanies.slice(mid - 1, mid + 1)
  : [itCompanies[mid]]);


console.log(itCompanies.sort());

itCompanies.forEach(company => console.log(company.toUpperCase()));

console.log(itCompanies.includes("Google") ? "Google" : "Company is not found");

for (let company of itCompanies) {
  let oCount = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') oCount++;
  }
  if (oCount > 1) {
    console.log(company);
  }
}

for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/\s/g, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   


const products = [
  { id: 1, title: "Smartphone", price: 799.99 },
  { id: 2, title: "Laptop", price: 1299.99 },
  { id: 3, title: "Coffee Maker", price: 99.99 },
  { id: 4, title: "Headphones", price: 199.99 },
  { id: 5, title: "Smart TV", price: 699.99 },
];

let total = 0;
products.forEach(p => total += p.price);

let average = total / products.length;

console.log("Cəm:", total.toFixed(2));
console.log("Ortalama:", average.toFixed(2));









fetch("https://book-store-api-liard-three.vercel.app/books")
  .then(response => {
    if (!response.ok) {
      throw new Error("Şəbəkə xətası baş verdi");
    }
    return response.json();
  })
  .then(data => {
    console.log("Kitablar:", data);
  })
  .catch(error => {
    console.error("Xəta:", error);
  });



  
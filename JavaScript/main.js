
function findDivisors(number) {
  const divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  console.log(`${number} ədədinin bölənləri: ${divisors.join(', ')}`);
}

findDivisors(12); 



function countDivisors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  console.log(`${number} ededinin ${count} boleni var.`);
  return count; 
}

countDivisors(20);


function upperStr(str) {
  return str.toUpperCase();
}

console.log(upperStr("salam necesen?")); 



function powerOfNumber(base, exponent) {
  const result = Math.pow(base, exponent);
  console.log(`${base} ^ ${exponent} = ${result}`);
  return result; 
}

const base = parseInt(prompt("Esas ededi daxil edin:"));
const exponent = parseInt(prompt("Quvveti daxil edin:"));
powerOfNumber(base, exponent);




function swapCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      newStr += char.toLowerCase();
    } else {
      newStr += char.toUpperCase();
    }
  }
  return newStr;
}

console.log(swapCase('saLamNecesen')); 





const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);




if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);




const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}
console.log(shoppingCart);



const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);



const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];





countries.reverse();
console.log(countries);



const canadaIndex = countries.indexOf('Canada');
const denmarkIndex = countries.indexOf('Denmark');
if (canadaIndex !== -1 && denmarkIndex !== -1) {
  
  countries.splice(Math.min(canadaIndex, denmarkIndex), 2, "Azerbaijan");
}
console.log(countries);



const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


const firstThree = itCompanies.slice(0, 3);
console.log(firstThree);


const lastThree = itCompanies.slice(itCompanies.length - 3);
console.log(lastThree);


const middleCompanies = itCompanies.slice(
  Math.floor(itCompanies.length / 2),
  Math.ceil(itCompanies.length / 2) + (itCompanies.length % 2)
);
console.log(middleCompanies);


itCompanies.sort();
console.log(itCompanies);


itCompanies.forEach(company => console.log(company.toUpperCase()));


const googleExists = itCompanies.includes('Google');
console.log(googleExists ? 'Google' : 'Company is not found');


function filterCompaniesWithMoreThanOneO(companies) {
  const result = [];
  for (let i = 0; i < companies.length; i++) {
    let count = 0;
    for (let j = 0; j < companies[i].length; j++) {
      if (companies[i][j].toLowerCase() === 'o') {
        count++;
      }
    }
    if (count > 1) {
      result.push(companies[i]);
    }
  }
  return result;
}

console.log(filterCompaniesWithMoreThanOneO(itCompanies));



function printPrimeNumbers() {
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

printPrimeNumbers();



function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str.toLowerCase() === reversedStr.toLowerCase();
}

console.log(isPalindrome('racecar')); 
console.log(isPalindrome('hello')); 


const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];


function calculateTotalPriceAndAverage(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  const average = total / products.length;
  console.log(`Total Price: $${total.toFixed(2)}`);
  console.log(`Average Price: $${average.toFixed(2)}`);
  return { total, average }; 
}

calculateTotalPriceAndAverage(products);

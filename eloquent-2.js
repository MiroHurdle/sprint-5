let str;
for (let i = 0; i < 7; i++) {
  str = str + '#'
  console.log(str)
}

for (let i = 0; i < 100; i++) {
	let j = i + 1;
  if (j % 3 == 0) {
      console.log('Fizz');
    }
    else if (j % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(j);
    }
  
}

for (let i = 0; i < 100; i++) {
	let j = i + 1;
  if (j % 3 == 0 & j % 5 == 0) {
      console.log('FizzBuzz');
    }
    else if (j % 3 == 0) {
      console.log('Fizz');
    } else if (j  % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(j);
    }
}

let size = 8;
let str1 = ' ';
let str2 = '#';
let str3 = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (j % 2 == 0 & i % 2 == 0) {
      str3 = str3 + str1;
    }
    else if (j  % 2 == 1 & i % 2 == 1) {
      str3 = str3 + str1;
    } else {
      str3= str3 + str2;
    }
  }
  str3 = str3 + '\n';
}
console.log(str3);
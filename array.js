var fruits = ["mango","orange","apple",11];
console.log(fruits.length);
fruits[4]="pineapple"; 
fruits.push("xyz"); //add last element
fruits.pop();//deletes last element
fruits.shift()//delete first element
fruits.unshift("added");//add as first element
console.log(fruits);
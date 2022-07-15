/*
const arr = ['a','b','e','b','g','c','a'];

let func = arr.reduce((acc, item)=>{
	if (item in acc){
		acc[item]++;
	}else {
		acc[item] = 1;
	}
	console.log(`acc[${item}]= ${acc[item]}`);
	return acc;
}, {});

console.log(func);
*/
/*
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    console.log(property);
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople);
*/
/*
const friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

let func = friends.reduce((pre, cur) =>{
	return [...pre, ...cur.books];
	console.log(cur);
},['asd']);
console.log(func);
*/
/*
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

let func = myArray.reduce((acc, item) => {
	if (acc.indexOf(item) == -1){
		acc.push(item);	 	
	}
	return acc
}, [])
console.log(func);
*/

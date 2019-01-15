const numbers = [1,2,3,4,5,6,7,8,9];
const names = ['jay','jose','lupito'];

for(let i=0; i< names.length; i++){
	if(i==1){
		break;

	}
	console.log(names [i]);
}
function logItems(items){
	console.log(logItems);

}
names.forEach(logItems);

/////////////////////////
const myFunction=function(names){
	console.log('olii'+names)
}

////////////////////////
const sum =(a,b) =>{
	const value = a+b;
	return value;
}
//////////////

const fullNames =[];
const resta = (a,b) => a-b;
names.forEach(items=>console.log(items));

names.map(items=> fullNames.push(items+'rodriguez') )
console.log(fullNames);


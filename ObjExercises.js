//Function to Compare  two objects that determine if the first one contains equivalent property values to the second one
const matches = (obj, source) =>
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 35, address:'Helsinki', isActive: true }, { address: 'Helsinki', isActive: true })); 
console.log(matches({address: 'Helsinki', isActive: true }, { age: 35, address: 'Helsinki', isActive: true }));
console.log(matches({address: 'Helsinki', isActive: true }, { age: 26, address: 'Helsinki', isActive: true })); 

// Can be done in this way to check only array if it is array or not
function is_array(arr){
    return Array.isArray(arr)? true : false
}
console.log(is_array('Coding is Fun'));
console.log(is_array([5, 9, 12, 0, 3]));

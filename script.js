let user = prompt('what is your name?')



if(
    user[0] === 'a' || user[0] === 'A' 
) {
    console.log('wellcome ' + user);
} else {
    console.log('good bay ' + user);
}

let age = prompt('how old are you?')

if(
    age > '17' 
) {
    console.log('wellcome ' + age);
} else {
    console.log('good bay ' + age);
}


let userNameResult = prompt('write user name!')

if(
    userNameResult.length % 2 === 0
) {
    console.log('good');
} else {
    console.log('bad');
}

let result = prompt('Введите число', '')

if (result % 2 === 0) {

  alert('Число четное')

} else {

  alert('Число нечетное')
}
















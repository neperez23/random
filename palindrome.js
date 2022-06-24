


function palindrome(str){
    //checks for non letters
    if(!/^[a-zA-Z]+$/.test(str)){
        return false
    }
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
console.log(palindrome('ada'));
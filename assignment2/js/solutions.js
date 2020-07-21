//Very Easy
//Q1. Convert Minutes into Seconds

function mintosec(min){
   var sec=min*60;
    return sec;

}

console.log(mintosec(5));
console.log(mintosec(3));
console.log(mintosec(2));

//Q2. Divides Evenly
function evendivide(a,b){
    if(a%b==0){
        console.log("True");
    }
    else
    console.log("False");
}

evendivide(98,7);
evendivide(85,4);

/************************************************ */
//Easy
//Q1. Count Instances of a Character in a String

function len(str,letter){
     let count=0;
   for(var i=0;i <= str.length;i++){
       if(str[i]===letter) 
       count++;
       
   }
   return count;
}
console.log(len('Mississippi','s'));

// Add up the Numbers from a Single Number

function factorial(f){
    let sum=0;
    for(var i=1;i<=f;i++)
   { sum = i+sum;
   } 
   return sum;
}
console.log(factorial(4));
console.log(factorial(13));
console.log(factorial(600));

//Q3. Replace Vowel with Another Character

function replaceVowel(s) {
    let s1 = '';
    
    for(let i=0; i<s.length; i++) {
        if(s[i] == 'a')
            s1+='1';
        else if(s[i] == 'e')
            s1+='2';
        else if(s[i] == 'i')
            s1+='3';
        else if(s[i] == 'o')
            s1+='4';
        else if(s[i] == 'u')
            s1+='5';
        else
            s1+=s[i];
    }    
    return s1;
}
console.log(replaceVowel('aeiouaeiou'));

/*************************************************************** */
//Medium
//Q1. Reverse Words Starting with a Particular Letter

function specialReverse(a,b){
    let s = a.split(' ');
    for(let i=0; i<s.length; i++){
        if(s[i][0] == b)
        {
        s[i]=s[i].split('').reverse().join('');    
        }

    } 
    return s.join(' ');   
}

console.log(specialReverse('word searches are super fun', 's'));
console.log(specialReverse('first man to walk on the moon', 'm'));
console.log(specialReverse('peter piper picked pickled peppers', 'p'));

//Q2. Hitting the Jackpot

function testJackpot(a) {
    for(let i=1; i<a.length; i++) {
        if(a[i] !== a[i-1])
            return false;
    }

    return true;
}
console.log(testJackpot(["@","@","@","@"]) );
console.log(testJackpot(['abc', 'abc', 'abc', 'abc']));
console.log(testJackpot(['SS', 'SS', 'SS', 'SS']));

//Q3.Remove Duplicates from an Array
function removeDups(a) {
    let a1 = [];
    for(let i=0; i<a.length; i++) {
        if(a1.indexOf(a[i]) === -1)
            a1.push(a[i]);
    }
    return a1;
}
console.log(removeDups ([1, 0, 1, 0]));
console.log(removeDups (['The', 'big', 'cat']));

/**************************************************************** */
//hard
//Q1. Get Real Type


function realType(x) {
    if(typeof(x) === "object") {
        if(x == null)
            return "null";
        if(x.constructor === Array)
            return "array";
    }
    return typeof(x);
}

console.log(realType (1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));

//Q2. Numbers in Strings
function numinstr(a){
    let a1=[];
    for(var i=1;i<a.length;i++)
        if(c[i]===['a'])
        {
            return a1;
        }
        else 
        return c;
}

console.log(["1a", "a", "2b", "b"]) ;
